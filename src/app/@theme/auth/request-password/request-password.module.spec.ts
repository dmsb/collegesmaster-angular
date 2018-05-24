import { RequestPasswordModule } from './request-password.module';

describe('RequestPasswordModule', () => {
  let requestPasswordModule: RequestPasswordModule;

  beforeEach(() => {
    requestPasswordModule = new RequestPasswordModule();
  });

  it('should create an instance', () => {
    expect(requestPasswordModule).toBeTruthy();
  });
});
