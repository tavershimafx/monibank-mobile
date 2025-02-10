import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/data.models";


export const userProfileGlobal = createAction('[UserProfile] GetUserProfile', props<{ profile: User}>())
export const globalCache = createAction('[CacheObject] SetCacheObject', props<{ data: object}>())