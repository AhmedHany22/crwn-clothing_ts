import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};
// __________ These are 2 types defination for withMatcher function __________
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;
// __________ This is the actual withMatcher function implementation __________
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

// __________ These are 2 interface for the function return __________
export interface ActionWithPayload<T, P> {
  type: T;
  payload: P;
}
export interface Action<T> {
  type: T;
}
// __________ These are 2 types defination for the function __________
export function actionCreator<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function actionCreator<T extends string>(
  type: T,
  payload: void
): Action<T>;

// __________ This is the actual function implementation __________
// It must be declared after all definitions
export function actionCreator<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
