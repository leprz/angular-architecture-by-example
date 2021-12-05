import { Route } from "@angular/router";

export abstract class TodoRouteResolverInterface {
  abstract readonly basic: Route;
  abstract readonly kanban: Route;

  routes(): Route[] {
    return [
      this.basic,
      this.kanban
    ];
  };
}
