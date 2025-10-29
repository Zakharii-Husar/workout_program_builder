import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { deleteProgram, startProgram, loadProgramForEdit, createDraft } from '../../../store/slices/programSlice';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import ProgramList from '../Main/ProgramList';
import { MainContainer, MainHeader, MainTitle, MainSubtitle, EmptyState, EmptyStateTitle, EmptyStateSubtitle, CreateButton } from '../Main/Main.styled';
import { icons } from '../../../data';
import WarningModal from '../../common/WarningModal/WarningModal';

const Programs: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allPrograms } = useAppSelector(state => state.programs);
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [programToDelete, setProgramToDelete] = useState<any | null>(null);

  const openDeleteModal = useCallback((program: any) => {
    setProgramToDelete(program);
    setIsDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setIsDeleteModalOpen(false);
    setProgramToDelete(null);
  }, []);

  const confirmDeleteProgram = useCallback(() => {
    if (!programToDelete) return;
    try {
      dispatch(deleteProgram(programToDelete.id));
    } catch (error) {
      console.error('Error removing program:', error);
      alert('Failed to remove program. Please try again.');
    }
  }, [dispatch, programToDelete]);

  const handleStartProgram = (program: any) => {
    dispatch(startProgram(program));
    navigate(`/start/${program.id}`);
  };

  const handleEditProgram = (program: any) => {
    dispatch(loadProgramForEdit(program));
    navigate(`/edit/${program.id}`);
  };

  if (allPrograms.length === 0) {
    return (
      <MainContainer>
        <MainHeader>
          <MainTitle>Workout Programs</MainTitle>
          <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
        </MainHeader>
        <EmptyState>
          <EmptyStateTitle>Ready to Build?</EmptyStateTitle>
          <EmptyStateSubtitle>
            Create your first workout program and start your fitness journey. 
            Choose exercises, set timers, and track your progress.
          </EmptyStateSubtitle>
          <CreateButton onClick={() => {
            dispatch(createDraft());
            navigate('/create');
          }}>
            <icons.add />
            CREATE FIRST PROGRAM
          </CreateButton>
        </EmptyState>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <MainHeader>
        <MainTitle>Workout Programs</MainTitle>
        <MainSubtitle>Build, track, and achieve your fitness goals</MainSubtitle>
      </MainHeader>
      <ProgramList
        programs={allPrograms}
        onStartProgram={handleStartProgram}
        onRemoveProgram={openDeleteModal}
        onEditProgram={handleEditProgram}
      />
      <WarningModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteProgram}
        message={`Delete program "${programToDelete?.name ?? ''}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Keep"
        confirmButtonColor="#dc3545"
      />
    </MainContainer>
  );
};

export default Programs;
