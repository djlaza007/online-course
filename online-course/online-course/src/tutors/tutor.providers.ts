import { Tutor } from "./tutor.model";

export const tutorsProviders = [
    {
      provide: 'TUTORS_REPOSITORY',
      useValue: Tutor,
    },
];