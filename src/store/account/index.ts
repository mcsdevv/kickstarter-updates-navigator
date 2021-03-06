/* eslint-disable @typescript-eslint/camelcase */
import {getters} from "@/store/account/getters";
import {mutations} from "@/store/account/mutations";
import {actions} from "@/store/account/actions";
import {Module} from "vuex";

export interface AccountState {
    isLoading: boolean;
    name: null | string;
    starred_projects: null | string;
    backed_projects: null | string;
}
export const account: Module<AccountState, any> = {
    namespaced: true as true,
    state: {
        isLoading: false,
        name: null,
        starred_projects: null,
        backed_projects: null,
    } as AccountState,
    getters,
    mutations,
    actions,
}