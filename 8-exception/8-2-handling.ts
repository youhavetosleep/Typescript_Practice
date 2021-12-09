{
  class NetworkClient {
    tryConnent(): void {
      throw new Error("no network!");
    }
  }
  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      try {
        this.client.tryConnent();
      } catch (err) {
        console.log("catched!");
      }
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (err) {
        //show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
