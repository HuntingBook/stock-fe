import { TestBed } from '@angular/core/testing';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { AppModule } from '../app.module';

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should be login', () => {
    const userService: UserService = TestBed.get(UserService);
    (done: DoneFn) => {
      userService.login("fuynbin@cn.ibm.com", "aq1sw2de")
        .pipe(map(response => {
          if (response && response.headers) {
            
            expect(response.headers).toBeTruthy();

            // returning 200 status
            expect(response.status).toBe(200);
            done();
          }
        }));
    }
  });
});
