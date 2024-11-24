import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 30829,
  login: 'I',
};

export const sampleWithPartialData: IUser = {
  id: 16448,
  login: 'q@',
};

export const sampleWithFullData: IUser = {
  id: 29093,
  login: 'ZL`@S\\tbNxw2X\\KvII\\gc\\Rk5\\dsACP',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
