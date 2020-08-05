import type { MutationTree } from 'vuex'
import type { RootState, Actions } from '~/types'

export const state = (): RootState => ({
    // * 여기에 상태들을 정의합니다.
    people: [],
})

export const mutations: MutationTree<RootState> = {
    // * 여기에 뮤테이션들을 정의합니다.
}

export const actions: Actions<RootState, RootState> = {
    // * 여기에 액션들을 정의합니다.

    async nuxtServerInit({ commit }, context) {
        // * 여기에 최초 초기화 액션을 정의합니다.
    },
}
