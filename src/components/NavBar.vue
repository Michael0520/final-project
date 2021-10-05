<template>
    <header class="index_header w-full">
        <nav class="index_nav" :class="isTop ? '' : 'index_transparent'">
            <a
                class="index_fade-in-out m-0 p-0 items-center"
                href="#"
                id="logo"
            >
                <!-- <img src="../assets/logo.png" class="w-20 h-7 bg-green-300" alt="logo" /> -->
                <h1 class="index_title text-3xl tracking-wider">9floor</h1>
            </a>
            <ul class="">
                <li
                    class="index_dropdown index_fade-in-out"
                    :class="isTop ? '' : 'index_transparent'"
                >
                    <div class="index_title">
                        入住玖樓
                        <i
                            class="material-icons ml-[3px]"
                            style="font-size: 12px"
                            >keyboard_arrow_down</i
                        >
                    </div>
                </li>
                <li
                    class="index_dropdown index_fade-in-out"
                    :class="isTop ? '' : 'index_transparent'"
                >
                    <div class="index_title">
                        玖樓
                        <i
                            class="material-icons ml-[3px]"
                            style="font-size: 12px"
                            >keyboard_arrow_down</i
                        >
                    </div>
                </li>
                <li
                    class="index_dropdown index_fade-in-out"
                    :class="isTop ? '' : 'index_transparent'"
                >
                    <div class="index_title">
                        服務
                        <i
                            class="material-icons ml-[3px]"
                            style="font-size: 12px"
                            >keyboard_arrow_down</i
                        >
                    </div>
                </li>
                <li
                    class="index_dropdown index_fade-in-out"
                    :class="isTop ? '' : 'index_transparent'"
                >
                    <div class="index_title">
                        <a href="#" class="p-0 m-0 no-underline bg-transparent"
                            >日誌</a
                        >
                    </div>
                </li>
                <li
                    class="index_fade-in-out"
                    :class="isTop ? '' : 'index_transparent'"
                >
                    <div>
                        <button class="index_title items-center">登入</button>
                    </div>
                </li>
                <li class="" :class="isTop ? '' : 'index_transparent'">
                    <div>
                        <button
                            class="index_button h-[23px]"
                            :class="isTop ? '' : 'index_inverse'"
                        >
                            <div>註冊</div>
                        </button>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script>
export default {
    data() {
        return {
            name: "navbar",
            scrollNum: 0,
            isTop: false,
        };
    },
    methods: {},
    mounted() {
        // if isTop = 0 , add transparent class , else remove
        window.addEventListener("scroll", () => {
            let clientTop =
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                window.pageYOffset;
            this.scrollNum = clientTop;
            // console.log(`目前頁面高度 ${clientTop}`);
            if (clientTop >= 1) {
                this.isTop = true;
            } else {
                this.isTop = false;
            }
        });
    },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .index_nav {
        @apply h-[72px] w-full px-[60px] bg-white flex items-center justify-between fixed top-0 left-0 z-[100];
    }
    .index_nav ul {
        @apply flex items-center;
    }
    .index_nav li {
        @apply h-[71px] w-auto ml-[25px] relative cursor-pointer;
    }
    .index_nav div {
        @apply h-full w-full flex justify-center items-center;
    }
    .index_nav.index_transparent {
        @apply h-[114px] bg-transparent pr-[42px] pl-[54px];
    }
    /* 當 top = 0 , add this class 
    nav height=114 ; li=72
    */
    .index_transparent {
        @apply h-[57px]  bg-transparent text-white;
    }
    .index_transparent > .index_title {
        @apply py-[18px] pl-[10px];
    }

    .index_transparent li {
        @apply h-[57px];
    }

    /*  */
    .index_dropdown {
        @apply h-[71px] w-auto ml-[25px] relative cursor-pointer;
    }
    .index_title {
        @apply h-[71px] py-[25px] pl-[10px] text-xs leading-[1.75] tracking-[3.4px] text-left;
    }
    /* transition */
    .index_fade-in-out {
        @apply transition-all duration-300 opacity-100 ease-in-out;
    }
    /* button-content style */
    .index_button-title {
        @apply flex justify-center items-center text-center text-xs leading-[1.75] tracking-[3.4px] text-gray;
    }
    /* button transparent */
    .index_inverse {
        @apply border-white;
    }
}
</style>
