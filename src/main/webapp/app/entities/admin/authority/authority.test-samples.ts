import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'be7a9602-a2d7-40e7-9bbe-99e7ea7eeecc',
};

export const sampleWithPartialData: IAuthority = {
  name: '205f079f-123e-4a03-8fbe-b1bf92cffa48',
};

export const sampleWithFullData: IAuthority = {
  name: 'd4d91a63-6200-43b3-98df-d7e2eda33485',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
