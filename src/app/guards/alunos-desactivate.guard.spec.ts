import { TestBed, async, inject } from '@angular/core/testing';

import { AlunosDesactivateGuard } from './alunos-desactivate.guard';

describe('AlunosDesactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDesactivateGuard]
    });
  });

  it('should ...', inject([AlunosDesactivateGuard], (guard: AlunosDesactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
