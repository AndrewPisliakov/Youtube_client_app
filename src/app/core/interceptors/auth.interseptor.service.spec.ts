import { TestBed } from '@angular/core/testing';

import { Auth.InterseptorService } from './auth.interseptor.service';

describe('Auth.InterseptorService', () => {
  let service: Auth.InterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth.InterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
