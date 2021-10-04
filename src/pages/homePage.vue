<template>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500&display=swap"
        rel="stylesheet"
    />

    <div class="content">
        <header class="index_header w-full">
            <nav class="index_nav">
                <a class="m-0 p-0 items-center" href="#" id="logo">
                    <!-- <img src="../assets/logo.png" class="w-20 h-7 bg-green-300" alt="logo" /> -->
                    <h1 class="text-3xl text-white tracking-wider">9floor</h1>
                </a>
                <ul class="my-4 flex items-center">
                    <li class="index_dropdown">
                        <div class="index_title">
                            入住玖樓
                            <i
                                class="material-icons ml-[3px]"
                                style="font-size: 12px"
                                >keyboard_arrow_down</i
                            >
                        </div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">
                            玖樓
                            <i
                                class="material-icons ml-[3px]"
                                style="font-size: 12px"
                                >keyboard_arrow_down</i
                            >
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">
                            服務
                            <i
                                class="material-icons ml-[3px]"
                                style="font-size: 12px"
                                >keyboard_arrow_down</i
                            >
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </li>
                    <li class="index_dropdown">
                        <div class="index_title">
                            <a
                                href="#"
                                class="p-0 m-0 no-underline bg-transparent"
                                >日誌</a
                            >
                        </div>
                    </li>
                    <li class="index_transparent">
                        <div class="index_title">
                            <button class="tracking-[3.4px]">登入</button>
                        </div>
                    </li>
                    <li class="index_transparent">
                        <div class="flex justify-center items-center">
                            <div class="index_title py-3.5">
                                <button
                                    class="
                                        index_fade-in-out
                                        pl-3
                                        pr-2.5
                                        box-content
                                        border border-white
                                    "
                                >
                                    <div
                                        class="
                                            flex
                                            justify-center
                                            items-center
                                            text-xs text-center
                                            leading-[1.75]
                                            tracking-[3.4px]
                                        "
                                    >
                                        註冊
                                    </div>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="index_content index_show opacity-100">
            <!-- TODO:index_show 需要增加 視差滾動效果
            transition : opacity .3s;
            -->
            <div class="index_home flex flex-col items-center">
                <div
                    class="
                        index_banner
                        h-screen
                        w-screen
                        pt-28
                        bg-cover bg-center bg-fixed
                        flex flex-col
                        justify-center
                        items-center
                    "
                    style="
                        background-image: url('https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png');
                    "
                >
                    <div
                        class="
                            index_banner-content
                            w-full
                            flex
                            relative
                            justify-center
                            items-center
                            min-h-[150px]
                            z-[2]
                        "
                    >
                        <p
                            class="
                                index_banner-subtitle
                                p-0
                                m-0
                                absolute
                                top-0
                                left-[60px]
                                text-[13px] text-white
                                font-normal
                                leading-[1.6]
                                tracking-[1.3px]
                            "
                            style="
                                writing-mode: vertical-rl;
                                white-space: per-line;
                            "
                        >
                            Live in a community
                            <br />rather than a room.
                        </p>
                        <p
                            class="
                                index_banner-title
                                max-h-[425px]
                                text-2xl text-white
                                overflow-hidden
                                text-center
                                font-serif font-bold
                                leading-5
                                tracking-[7.7px]
                            "
                            style="writing-mode: vertical-rl"
                        >
                            房子是租來的，生活不是
                        </p>
                    </div>
                    <a
                        href="#"
                        class="
                            index_button
                            h-7
                            pl-3
                            pr-2.5
                            mt-7
                            flex
                            justify-center
                            relative
                            outline-none
                            transition-all
                            duration-300
                            ease-in-out
                            bg-[#c77155]
                            border border-[#6a4234]
                        "
                    >
                        <div
                            class="
                                flex
                                text-white
                                items-center
                                justify-center
                                text-xs
                                leading-[1.75]
                                tracking-[3.4px]
                            "
                        >
                            開始搜尋
                            <i
                                class="material-icons mr-[3px]"
                                style="direction: ltr; font-size: 16px"
                                >chevron_right</i
                            >
                        </div>
                    </a>
                </div>
                <div class="index_content w-full max-w-screen-xl flex">
                    <div
                        class="
                            index_sidebar index_left
                            w-[60px]
                            flex flex-col flex-shrink-0
                            items-center
                            border-r-[1px] border-lightGreen
                            opacity-100
                            transition-opacity
                            duration-500
                        "
                        style="flex-basis: 60px"
                    >
                        <div
                            class="
                                index_fade-in-out
                                mt-[60px]
                                transition-opacity
                                duration-300
                                opacity-100
                            "
                        >
                            <div
                                class="
                                    index_vertical-word
                                    flex flex-col
                                    mb-5
                                    text-[10px] text-[#444647]
                                "
                            >
                                <span class="text-[10px] mb-[2px] rotate-90"
                                    >精</span
                                >
                                <span class="text-[10px] mb-[2px] rotate-90"
                                    >選</span
                                >
                                <span class="text-[10px] mb-[2px] rotate-90"
                                    >房</span
                                >
                                <span class="text-[10px] mb-[2px] rotate-90"
                                    >源</span
                                >
                            </div>
                            <div
                                class="
                                    index_vertical-en
                                    text-[10px] text-[#444647]
                                "
                                style="writing-mode: vertical-lr"
                            >
                                Housing-Info
                            </div>
                        </div>
                    </div>
                    <div class="index_center pt-[60px]">
                        <div class="index_view-marker p-0 m-0 opacity-0"></div>
                        <section
                            class="
                                index_co-living-slider
                                w-full
                                mb-[90px]
                                flex
                                relative
                            "
                        >
                            <!-- TODO:資料會使用 JS 搭配輪播圖來動態更新 -->
                            <p
                                class="
                                    index_watermark
                                    mt-[110px]
                                    text-[34px] text-gray
                                    font-bold
                                    leading-[1.29]
                                    tracking-[7.7px]
                                    not-italic
                                    absolute
                                "
                                style="
                                    writing-mode: vertical-rl;
                                    left: calc(50% - 22px);
                                    font-family: source-han-serif-japanese,
                                        serif;
                                "
                            >
                                共居生活
                            </p>
                            <div class="index_left w-2/4 mt-[110px] ml-[51px]">
                                <div
                                    class="
                                        index_left_subTitle index_fade-in-out
                                        max-w-[405px]
                                        font-medium
                                        leading-[1.35]
                                        tracking-[5px]
                                        text-[#945443] text-xl
                                        truncate
                                    "
                                >
                                    日常支援
                                </div>
                                <div
                                    class="
                                        index_description index_fade-in-out
                                        max-w-[405px]
                                        mt-[30px]
                                        text-[#444647] text-[13px]
                                        font-light
                                        leading-[2]
                                        tracking-[1px]
                                    "
                                >
                                    訂閱式的線上繳租，讓租房跟聽Spotify一樣簡單。一張帳單、線上刷卡，一次解決所有費用。不管是實習外派，還是留學交換，最短一個月的彈性租期、便利人性的入住流程，再也不用被合約綁住精彩的人生規畫。
                                </div>
                                <div
                                    class="
                                        index_buttons
                                        mt-[45px]
                                        flex
                                        justify-start
                                    "
                                >
                                    <a
                                        href="#"
                                        class="
                                            index_button
                                            index_fade-in-out
                                            index_primary
                                        "
                                    >
                                        <div class="index_button-title">
                                            <i
                                                class="
                                                    material-icons
                                                    text-[#444647]
                                                "
                                                style="font-size: 16px"
                                                >search</i
                                            >
                                            搜尋物件
                                        </div>
                                    </a>
                                    <a
                                        href="#"
                                        class="
                                            index_button
                                            index_fade-in-out
                                            index_primary
                                        "
                                    >
                                        <div class="index_button-title">
                                            服務詳情
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class="
                                        index_step
                                        max-w-[248px]
                                        mt-[60px]
                                        flex
                                        justify-between
                                        items-center
                                    "
                                >
                                    <div
                                        class="
                                            text-[11px]
                                            font-light
                                            leading-[2]
                                            tracking-[.5px]
                                            text-[#444647]
                                        "
                                    >
                                        <!-- TODO:使用 JS 搭配輪播圖，來更新資料： {{currentPage}} / {{totalPage}} -->
                                        01 / 04
                                    </div>
                                    <div class="index_buttons">
                                        <button class="w-4 h-4 ml-[17px]">
                                            <i
                                                class="
                                                    material-icons
                                                    text-[#444647]
                                                "
                                                style="font-size: 16px"
                                                >chevron_left</i
                                            >
                                        </button>
                                        <button>
                                            <i
                                                class="
                                                    material-icons
                                                    text-[#444647]
                                                "
                                                style="font-size: 16px"
                                                >chevron_right</i
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="index_right w-2/4">
                                <div
                                    class="
                                        index_image
                                        h-full
                                        flex
                                        justify-center
                                        overflow-hidden
                                    "
                                >
                                    <img
                                        class="
                                            index_fade-in-out
                                            h-[450px]
                                            border-none
                                        "
                                        src="https://9floor.co/backend/web/lifestyle/20190121-34dfc9806d7784113506336bf18183a1.jpg"
                                        alt="slider"
                                    />
                                </div>
                            </div>
                        </section>
                        <div class="index_view-marker p-0 m-0 opacity-0"></div>
                        <section
                            class="index_room-card-list mb-[42px] p-0 px-[17px]"
                        >
                            <div
                                class="
                                    index_section-title
                                    desktop:hidden
                                    laptop:flex laptop:flex-col
                                    laptop:items-center
                                    laptop:mb-[18px]
                                "
                            >
                                <!-- TODO:當畫面小於 1200px 時，才會顯示 -->
                                <div
                                    class="
                                        laptop:h-[23px]
                                        laptop:text-sm
                                        laptop:leading-[1.5]
                                        laptop:tracking-[5.6px]
                                        laptop:text-[#444647]
                                    "
                                >
                                    精選房源
                                </div>
                                <div
                                    class="
                                        laptop:h-[23px]
                                        laptop:text-[10px]
                                        laptop:leading-[2.1]
                                        laptop:tracking-[1px]
                                        laptop:text-[#444647]
                                    "
                                >
                                    Housing Info
                                </div>
                            </div>
                            <div class="index_first-rooms mb-[35px] flex">
                                <div
                                    class="
                                        index_first-room-card
                                        w-full
                                        mx-[17px]
                                        pb-[7px]
                                    "
                                >
                                    <div
                                        class="
                                            index_first-room-card-image-wrapper
                                            w-full
                                        "
                                    >
                                        <a
                                            href="#"
                                            class="p-0 m-0 no-underline"
                                        >
                                            <div
                                                class="index_room-card-image"
                                                style="
                                                    background-image: url('https://9floor.co/backend/web/roomPhoto/20200902-50a611e8ecd6f999ca037a57539c8465.png');
                                                "
                                            ></div>
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-title
                                            my-[14px]
                                        "
                                    >
                                        <a
                                            href="#"
                                            class="
                                                text-lg
                                                font-medium
                                                leading-[1.35]
                                                tracking-[3px]
                                                text-[#945443]
                                            "
                                        >
                                            <span>仁愛</span></a
                                        >
                                        <a href="#">
                                            <span
                                                class="
                                                    ml-[10px]
                                                    text-lg
                                                    font-medium
                                                    tracking-[3px]
                                                    text-[#444647]
                                                "
                                                >仁愛 RoomA</span
                                            >
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-status
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                            >獨立套房</span
                                        >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                            >招募中</span
                                        >
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-detail
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                        >
                                            NTD
                                            <span
                                                class="
                                                    index_first-room-card-price
                                                    text-lg
                                                    font-light
                                                    leading-[1.22]
                                                    tracking-[1px]
                                                "
                                                >16500</span
                                            >
                                            / 月
                                        </span>
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                        ></span>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-location
                                            h-6
                                            flex flex-wrap
                                            font-light
                                            text-xs text-[#444647]
                                            leading-[2]
                                            tracking-[.5px]
                                        "
                                    >
                                        <span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >directions_railway</i
                                            >忠孝新生</span
                                        >
                                        <span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >directions_walk</i
                                            >8mins</span
                                        ><span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >people</i
                                            >0 位室友</span
                                        >
                                    </div>
                                </div>
                                <div
                                    class="
                                        index_first-room-card
                                        w-full
                                        mx-[17px]
                                        pb-[7px]
                                    "
                                >
                                    <div
                                        class="
                                            index_firsit-room-card-image-wrapper
                                            w-full
                                        "
                                    >
                                        <a
                                            href="#"
                                            class="p-0 m-0 no-underline"
                                        >
                                            <div
                                                class="index_room-card-image"
                                                style="
                                                    background-image: url('https://9floor.co/backend/web/roomPhoto/20210910-dab1e9172fe244cb04dba6af9434cdb2.png');
                                                "
                                            ></div>
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-title
                                            my-[14px]
                                        "
                                    >
                                        <a
                                            href="#"
                                            class="
                                                text-lg
                                                font-medium
                                                leading-[1.35]
                                                tracking-[3px]
                                                text-[#945443]
                                            "
                                        >
                                            <span>仁愛</span></a
                                        >
                                        <a href="#">
                                            <span
                                                class="
                                                    ml-[10px]
                                                    text-lg
                                                    font-medium
                                                    tracking-[3px]
                                                    text-[#444647]
                                                "
                                                >仁愛 RoomC</span
                                            >
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-status
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                            >雅房</span
                                        >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                            >招募中</span
                                        >
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-detail
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                        >
                                            NTD
                                            <span
                                                class="
                                                    index_first-room-card-price
                                                    text-lg
                                                    font-light
                                                    leading-[1.22]
                                                    tracking-[1px]
                                                "
                                                >16500</span
                                            >
                                            / 月
                                        </span>
                                        <span
                                            class="
                                                text-[13px] text-[#444647]
                                                font-light
                                                leading-[2]
                                                tracking-[1px]
                                            "
                                        ></span>
                                    </div>
                                    <div
                                        class="
                                            index_first-room-card-location
                                            h-6
                                            flex flex-wrap
                                            font-light
                                            text-xs text-[#444647]
                                            leading-[2]
                                            tracking-[.5px]
                                        "
                                    >
                                        <span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >directions_railway</i
                                            >忠孝新生</span
                                        >
                                        <span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >directions_walk</i
                                            >8mins</span
                                        ><span
                                            class="mr-[15px] flex items-center"
                                            ><i
                                                class="
                                                    material-icons
                                                    mr-2
                                                    text-[#444647]
                                                "
                                                style="font-size: 17px"
                                                >people</i
                                            >0 位室友</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="index_second-rooms flex">
                                <div class="index_room-card">
                                    <div
                                        class="
                                            index_second-room-image-wrapper
                                            w-full
                                        "
                                    >
                                        <a href="#">
                                            <div
                                                class="index_room-card-image"
                                                style="
                                                    background-image: url('https://9floor.co/backend/web/roomPhoto/20200902-42ad2a4d01809a0fd6fd033412ef41e2.png');
                                                "
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="index_room-title">
                                        <a
                                            href="#"
                                            class="index_room-leftTitle"
                                        >
                                            <span class=""
                                                >玖樓宅度假 -漫步旅店</span
                                            >
                                        </a>
                                        <a
                                            href="#"
                                            class="index_room-rightTitle"
                                        >
                                            <span
                                                class="
                                                    ml-[10px]
                                                    text-[18px] text-gray
                                                    font-light
                                                    leading-[1.35]
                                                    tracking-[3px]
                                                "
                                                >浴缸雙人房</span
                                            >
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_room-status
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">獨立套房</span>
                                        <span>招募中</span>
                                    </div>
                                    <div
                                        class="
                                            index_room-detail
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">
                                            NTD
                                            <span
                                                class="
                                                    index_price
                                                    text-[18px]
                                                    font-light
                                                    leading-[1.22]
                                                    tracking-[1px]
                                                "
                                                >21800</span
                                            >
                                            / 月
                                        </span>
                                        <span class=""></span>
                                    </div>
                                </div>
                                <div class="index_room-card">
                                    <div
                                        class="
                                            index_second-room-image-wrapper
                                            w-full
                                        "
                                    >
                                        <a href="#">
                                            <div
                                                class="index_room-card-image"
                                                style="
                                                    background-image: url('https://9floor.co/backend/web/roomPhoto/20210423-a16116723e5aae7cd6d2b715c731ee88.png');
                                                "
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="index_room-title">
                                        <a
                                            href="#"
                                            class="index_room-leftTitle"
                                        >
                                            <span class="">玖樓璞園</span>
                                        </a>
                                        <a
                                            href="#"
                                            class="index_room-rightTitle"
                                        >
                                            <span
                                                class="
                                                    ml-[10px]
                                                    text-[18px] text-gray
                                                    font-light
                                                    leading-[1.35]
                                                    tracking-[3px]
                                                "
                                                >PURE Coliving 雙人雅房</span
                                            >
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_room-status
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">雅房</span>
                                        <span>招募中</span>
                                    </div>
                                    <div
                                        class="
                                            index_room-detail
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">
                                            NTD
                                            <span
                                                class="
                                                    index_price
                                                    text-[18px]
                                                    font-light
                                                    leading-[1.22]
                                                    tracking-[1px]
                                                "
                                                >13500</span
                                            >
                                            / 月
                                        </span>
                                        <span class=""></span>
                                    </div>
                                </div>
                                <div class="index_room-card">
                                    <div
                                        class="
                                            index_second-room-image-wrapper
                                            w-full
                                        "
                                    >
                                        <a href="#">
                                            <div
                                                class="index_room-card-image"
                                                style="
                                                    background-image: url('https://9floor.co/backend/web/roomPhoto/20210423-600c9c66739fa456b63eaf810e068428.png');
                                                "
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="index_room-title">
                                        <a
                                            href="#"
                                            class="index_room-leftTitle"
                                        >
                                            <span class="">玖樓璞園 </span>
                                        </a>
                                        <a
                                            href="#"
                                            class="index_room-rightTitle"
                                        >
                                            <span
                                                class="
                                                    ml-[10px]
                                                    text-[18px] text-gray
                                                    font-light
                                                    leading-[1.35]
                                                    tracking-[3px]
                                                "
                                                >PURE Coliving 單人雅房</span
                                            >
                                        </a>
                                    </div>
                                    <div
                                        class="
                                            index_room-status
                                            h-[26px]
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">雅房</span>
                                        <span>招募中</span>
                                    </div>
                                    <div
                                        class="
                                            index_room-detail
                                            flex
                                            justify-between
                                        "
                                    >
                                        <span class="">
                                            NTD
                                            <span
                                                class="
                                                    index_price
                                                    text-[18px]
                                                    font-light
                                                    leading-[1.22]
                                                    tracking-[1px]
                                                "
                                                >12500</span
                                            >
                                            / 月
                                        </span>
                                        <span class=""></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="
                                index_more-room
                                py-[42px]
                                mb-[53px]
                                bg-[#e9ece5]
                                flex flex-col
                                items-center
                            "
                        >
                            <div
                                class="
                                    max-w-[344px]
                                    mb-6
                                    text-gray text-[15px] text-center
                                    font-light
                                    leading-[1.35]
                                    tracking-[2.5px]
                                "
                            >
                                加入我們，分享彼此的世界，如約翰藍儂曾《想像》的那樣。
                            </div>
                            <a href="#" class="index_button">
                                <div
                                    class="
                                        flex
                                        justify-center
                                        items-center
                                        text-gray text-xs text-center
                                        leading-[1.75]
                                        tracking-[3.4px]
                                    "
                                >
                                    <i
                                        class="
                                            material-icons
                                            mr-[3px]
                                            text-gray
                                        "
                                        style="font-size: 16px"
                                        >search</i
                                    >
                                    更多物件
                                </div>
                            </a>
                        </section>
                        <div class="index_view-marker p-0 m-0 opacity-0"></div>
                    </div>
                    <div
                        class="
                            index_sider index_right
                            w-[60px]
                            flex flex-col flex-shrink-0
                            items-center
                            border-r-0 border-l-[1px] border-lightGreen
                            opacity-100
                            transition-opacity
                            duration-500
                        "
                        style="flex-basis: 60px"
                    >
                        <div
                            class="
                                mt-[60px]
                                fixed
                                top-[72px]
                                opacity-100
                                transition-opacity
                                duration-300
                            "
                        ></div>
                    </div>
                </div>
            </div>
            <footer class="index_footer">
                <div class="index_footer-top">
                    <div class="index_footer-sitmap flex">
                        <div
                            class="index_footer-column flex flex-col mr-[60px]"
                        >
                            <h5 class="mb-[25px] font-medium">入住玖樓</h5>
                            <a href="#" class="">條件搜尋</a>
                            <a href="#" class="">地圖搜尋</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class=""
                                >玖樓璞園</a
                            >
                        </div>
                        <div
                            class="index_footer-column flex flex-col mr-[60px]"
                        >
                            <h5 class="mb-[25px] font-medium">玖樓</h5>
                            <a href="#" class="">關於玖樓</a>
                            <a href="#" class="">團隊夥伴</a>
                            <a href="#" class="">空間管理</a>
                            <a href="#" class="">共同生活</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class=""
                                >最新消息</a
                            >
                        </div>
                        <div
                            class="index_footer-column flex flex-col mr-[60px]"
                        >
                            <h5 class="mb-[25px] font-medium">協助</h5>
                            <a href="#" class="">如何申請</a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class=""
                                >常見問題</a
                            >
                            <a href="#" class="">聯絡我們</a>
                            <a href="#" class="">媒體專區</a>
                        </div>
                    </div>
                    <div class="index_footer-info flex flex-col justify-end">
                        <div class="index_footer-logo w-[90% pt-[5px] mx-auto">
                            <img
                                src=""
                                alt=""
                                class="w-full h-auto overflow-hidden"
                            />
                            <!-- TODO:footer-height 29px width 72px -->
                            9floor
                        </div>
                        <div class="index_footer-social-media ml-auto">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/9floor.co/"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="" />IG
                            </a>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/9floor.co/"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="" />FB
                            </a>
                            <a
                                target="_blank"
                                href="https://open.spotify.com/user/cmas3ut0ye02tk1q56qwkf3pu?si=1MWz3EIzQYyVmYMd2CbmbQ"
                                rel="noopener noreferrer"
                            >
                                <img src="" alt="" />SPOTIFY
                            </a>
                        </div>
                    </div>
                </div>
                <div class="index_footer-bottom">
                    <span class="text-xs text-gray tracking-[1.1px]">
                        <span role="img" aria-labelledby="copy-right">©</span>
                        玖樓 9floor 2019
                    </span>
                    <div
                        class="
                            index_footer-policy
                            text-xs text-gray
                            tracking-[1.1px]
                        "
                    >
                        <a href="#" class="">
                            <span class="ml-[15px]">服務條款</span></a
                        >
                        <a href="#" class="">
                            <span class="ml-[15px]">服務說明</span></a
                        >
                        <a href="#" class="">
                            <span class="ml-[15px]">隱私權政策</span></a
                        >
                        <a href="#" class="">
                            <span class="ml-[15px]">網站地圖</span></a
                        >
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style>
.index_banner::before {
    /* 背景遮罩 */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
}
.index_button {
    @apply h-[30px] mr-5 flex justify-center relative pr-[10px] pl-3 border border-gray outline-none transition-all duration-300;
}

.index_room-card {
    @apply w-full mx-[17px] pb-[7px];
}
/* Card-images */
.index_room-card-image {
    @apply w-full bg-cover bg-center;
}
.index_room-card-image::after {
    display: block;
    content: "";
    padding-top: 60%;
}
.index_room-title {
    @apply my-[14px];
}
.index_room-leftTitle {
    @apply text-orange text-lg font-medium leading-[1.35] tracking-[3px];
}
.index_room-detail > span {
    @apply text-[13px] font-light leading-[2] tracking-[1px] text-gray;
}
.index_room-status span {
    @apply text-[13px] font-light leading-[2] tracking-[1px] text-gray;
}
/* footer */
.index_footer {
    @apply w-full text-gray bg-[#f3f2ef];
}
.index_footer-top {
    @apply max-w-7xl m-auto  py-10 px-[60px] flex justify-between;
}
.index_footer-column a {
    @apply mb-[15px] text-xs text-gray tracking-[.5px];
}
.index_footer-social-media a {
    @apply inline-flex w-[14px] h-[14px] ml-[15px] p-[5px] box-content bg-orange rounded-[50%];
}
.index_footer-bottom {
    @apply max-w-7xl h-[50px] px-[60px]  m-auto text-xs flex justify-between items-center tracking-[1.1px] border-t border-[#d2c8bd];
}
</style>

<script>
export default {
    name: "homePage",
    props: {
        msg: String,
        // image: 'https://9floor.co/backend/web/banner/20200408-7613a5c701c8d4a8f5f42d363c2a536b.png',
    },
};
</script>
