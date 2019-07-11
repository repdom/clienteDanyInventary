import { TestBed } from '@angular/core/testing';
import { ArticulosService } from './articulos.service';
describe('ArticulosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ArticulosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=articulos.service.spec.js.map