import { createReducer, on } from "@ngrx/store";
import { globalCache, userProfileGlobal } from "../actions/left-nav.action";
import { User } from "src/app/models/data.models";


const userInitialState: User = { }

export const UserProfileReducer = createReducer(userInitialState,
    on(userProfileGlobal, (state, { profile }) => ({ ...profile} ))
)

export const GlobalCacheReducer = createReducer({ },
    on(globalCache, (state, { data }) => ({ ...data} ))
)
