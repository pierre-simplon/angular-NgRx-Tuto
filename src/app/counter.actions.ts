import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const resetPostBackendSuccessed = createAction(
  '[Counter Component] Reset in back-end Successed'
);
export const resetPostBackendError = createAction(
  '[Counter Component] Reset in back-end Error'
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
