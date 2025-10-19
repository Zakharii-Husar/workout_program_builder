class SoundService {
  private audio: HTMLAudioElement | null = null;
  private isPermissionGranted = false;

  constructor() {
    this.initializeAudio();
  }

  private initializeAudio() {
    try {
      this.audio = new Audio('/src/assets/bell.mp3');
      this.audio.preload = 'auto';
      this.audio.volume = 0.7; // Set a reasonable volume
    } catch (error) {
      console.warn('Failed to initialize audio:', error);
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!this.audio) {
      console.warn('Audio not initialized');
      return false;
    }

    try {
      // Modern browsers require user interaction to play audio
      // We'll try to play and pause immediately to enable audio context
      await this.audio.play();
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPermissionGranted = true;
      return true;
    } catch (error) {
      console.warn('Audio permission denied or failed:', error);
      return false;
    }
  }

  async playBell(repeatCount: number = 1): Promise<void> {
    if (!this.audio || !this.isPermissionGranted) {
      console.warn('Audio not available or permission not granted');
      return;
    }

    try {
      for (let i = 0; i < repeatCount; i++) {
        // Reset audio to beginning for each play
        this.audio.currentTime = 0;
        await this.audio.play();
        
        // Wait for the audio to finish before playing the next one
        await new Promise<void>((resolve) => {
          const handleEnded = () => {
            this.audio?.removeEventListener('ended', handleEnded);
            resolve();
          };
          this.audio?.addEventListener('ended', handleEnded);
        });

        // Small delay between repetitions
        if (i < repeatCount - 1) {
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      }
    } catch (error) {
      console.warn('Failed to play bell sound:', error);
    }
  }

  async playBellWithPermissionRequest(repeatCount: number = 1): Promise<void> {
    if (!this.isPermissionGranted) {
      const granted = await this.requestPermission();
      if (!granted) {
        console.warn('Could not get audio permission');
        return;
      }
    }

    await this.playBell(repeatCount);
  }

  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

// Export a singleton instance
export const soundService = new SoundService();
