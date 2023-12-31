import { type BoardType } from '@/games/2048/utils/board';
import { type ActionType } from '@/games/2048/types/ActionType';

export interface ActionModel {
  type: ActionType;
  value?: number;
}

export interface StorageModel {
  best?: number;
  score?: number;
  board?: BoardType;
  boardSize?: number;
  defeat?: boolean;
  victoryDismissed?: boolean;
}

export interface Point {
  x: number;
  y: number;
}
