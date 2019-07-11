import { TestBed } from '@angular/core/testing';

import { MovimientoInventarioService } from './movimiento-inventario.service';

describe('MovimientoInventarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimientoInventarioService = TestBed.get(MovimientoInventarioService);
    expect(service).toBeTruthy();
  });
});
