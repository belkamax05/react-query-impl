import { jest } from '@jest/globals';
import '@testing-library/jest-dom';

jest.useFakeTimers();
jest.setSystemTime(new Date(2020, 0, 1).getTime());
