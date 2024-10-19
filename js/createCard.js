
createProduct();
function createProduct() {
    if (localStorage.getItem("product") === null) {
        let products = [
            {
                id: 1,
                image1: "./img_gundam/img1.jpg",
                image2: "./img_gundam2/img1.jpg",
                image3: "./img_gundam3/img1.jpg",
                image4: "./img_gundam4/img1.jpg",
                detail1: "Thương hiệu: Motor Nuclear",
                detail2: "Chất liệu: Nhựa + Kim loại",
                detail3: "Tỷ lệ : 1/72",
                detail4: "Cao : 23cm",
                name: "GUNDAM",
                introduce: "MNP-XH04 1/72 Metal Frame Nezha Na Tra",
                price: 190
            },
            {
                id: 2,
                image1: "./img_gundam/img2.jpg",
                image2: "./img_gundam2/img2.jpg",
                image3: "./img_gundam3/img2.jpg",
                image4: "./img_gundam4/img2.jpg",
                detail1: "Thương hiệu : Banpresto",
                detail2: "Chất liệu : + vải + cao su + Kim loại",
                detail3: "Tỷ lệ : 1/12",
                detail4: "Trọn bộ gồm 5 nhân vật: Tôn Ngộ Không, Đường Tam Tạng, Trư Bát Giới, Sa Ngộ Tĩnh, Bạch Long Mã + 1 phông nền trưng bày",
                name: "FIGURE",
                introduce: "303 Toys 1/12 Ngũ Hổ Tướng Tam Quốc Chí",
                price: 550
            },
            {
                id: 3,
                image1: "./img_gundam/img3.jpg",
                image2: "./img_gundam2/img3.jpg",
                image3: "./img_gundam3/img3.jpg",
                image4: "./img_gundam4/img3.jpg",
                detail1: "Thương hiệu: Haoyu Toys",
                detail2: "Chất liệu : PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Cao : ~15cm",
                name: "FIGURE",
                introduce: "Banpresto Blue Eyes White Dragon",
                price: 200
            },
            {
                id: 4,
                image1: "./img_gundam/img4.jpg",
                image2: "./img_gundam2/img4.jpg",
                image3: "./img_gundam3/img4.jpg",
                image4: "./img_gundam4/img4.jpg",
                detail1: "Thương hiệu : Motor Nuclear",
                detail2: "Chất liệu : Nhựa + Kim loại",
                detail3: "Tỷ lệ : 1/72",
                detail4: "Cao : 23cm",
                name: "GUNDAM",
                introduce: "MNP-XH05 1/72 Metal Frame Triệu Vân + Bạch Long Mã",
                price: 175
            },
            {
                id: 5,
                image1: "./img_gundam/img5.jpg",
                image2: "./img_gundam2/img5.jpg",
                image3: "./img_gundam3/img5.jpg",
                image4: "./img_gundam4/img5.jpg",
                detail1: "Thương hiệu : JMS",
                detail2: "Xuất xứ : Trung Quốc",
                detail3: "Chất liệu : Nhựa abs",
                detail4: "Chiều cao : 15cm",
                name: "GUNDAM",
                introduce: "Mô hình HG 1/144 JMS Hyaku Shiki",
                price: 250
            },
            {
                id: 6,
                image1: "./img_gundam/img6.jpg",
                image2: "./img_gundam2/img6.jpg",
                image3: "./img_gundam3/img6.jpg",
                image4: "./img_gundam4/img6.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa ABS",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Chiều cao : 15cm",
                name: "GUNDAM",
                introduce: "HG Gyan-Gundam Chính hãng Bandai",
                price: 195
            },
            {
                id: 7,
                image1: "./img_gundam/img7.jpg",
                image2: "./img_gundam2/img7.jpg",
                image3: "./img_gundam3/img7.jpg",
                image4: "./img_gundam4/img7.jpg",
                detail1: "Thương hiệu : Haoyu Toys",
                detail2: "Chất liệu : Nhựa + vải + cao su + Kim loại",
                detail3: "Tỷ lệ  :1/12",
                detail4: "Kích thước : ~22cm",
                name: "FIGURE",
                introduce: "Haoyu Toys 1/12 Tây Du Ký 5 Thầy trò Đường Tăng",
                price: 430
            },
            {
                id: 8,
                image1: "./img_gundam/img8.jpg",
                image2: "./img_gundam2/img8.jpg",
                image3: "./img_gundam3/img8.jpg",
                image4: "./img_gundam4/img8.jpg",
                detail1: "Thương hiệu : Haoyu Toys",
                detail2: "Chất liệu : Nhựa + vải + cao su + Kim loại",
                detail3: "Tỷ lệ  :1/12",
                detail4: "Kích thước : ~22cm",
                name: "GUNDAM",
                introduce: "HG Forbidden Gundam -Gundam Chính hãng Bandai",
                price: 350
            },
            {
                id: 9,
                image1: "./img_gundam/img9.jpg",
                image2: "./img_gundam2/img9.jpg",
                image3: "./img_gundam3/img9.jpg",
                image4: "./img_gundam4/img9.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Chiều cao : 17CM",
                name: "FIGURE-RISE",
                introduce: "Mô hình lắp ráp Figure-rise Standard Kamen Rider Build",
                price: 595
            },
            {
                id: 10,
                image1: "./img_gundam/img10.jpg",
                image2: "./img_gundam2/img10.jpg",
                image3: "./img_gundam3/img10.jpg",
                image4: "./img_gundam4/img10.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa abs",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Chiều cao : 17cm",
                name: "FIGURE-RISE",
                introduce: "Mô hình lắp ráp Figure-rise Standard Kamen Rider Zi-O",
                price: 750
            },
            {
                id: 11,
                image1: "./img_gundam/img11.jpg",
                image2: "./img_gundam2/img11.jpg",
                image3: "./img_gundam3/img11.jpg",
                image4: "./img_gundam4/img11.jpg",
                detail1: "Thương hiệu : Motor Nuclear",
                detail2: "Chất liệu : Nhựa + Kim loại",
                detail3: "Tỷ lệ : 1/72",
                detail4: "Cao : 23cm",
                name: "FIGURE",
                introduce: "Mô hình figure: Luffy – King Of Artist The Bound Man",
                price: 195
            },
            {
                id: 12,
                image1: "./img_gundam/img12.jpg",
                image2: "./img_gundam2/img12.jpg",
                image3: "./img_gundam3/img12.jpg",
                image4: "./img_gundam4/img12.jpg",
                detail1: "Thương hiệu : Motor Nuclear",
                detail2: "Chất liệu : Nhựa PVC",
                detail3: "Tỷ lệ : 1/72",
                detail4: "Cao khoảng 14cm",
                name: "GUNDAM",
                introduce: "HG Shin Burning – Series Gundam Build Metaverse",
                price: 570
            },
            {
                id: 13,
                image1: "./img_gundam/img13.jpg",
                image2: "./img_gundam2/img13.jpg",
                image3: "./img_gundam3/img13.jpg",
                image4: "./img_gundam4/img13.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa ABS",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "",
                name: "GUNDAM",
                introduce: "HG UC 241 MS-06 Zaku II – Mô hình lắp ráp Gundam Bandai",
                price: 570
            },
            {
                id: 14,
                image1: "./img_gundam/img14.jpg",
                image2: "./img_gundam2/img14.jpg",
                image3: "./img_gundam3/img14.jpg",
                image4: "./img_gundam4/img14.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa ABS",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Chiều cao : ~ 18cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "Bleach – Kenpachi Zaraki Anime Solid and Souls",
                price: 820
            },
            {
                id: 15,
                image1: "./img_gundam/img15.jpg",
                image2: "./img_gundam2/img15.jpg",
                image3: "./img_gundam3/img15.jpg",
                image4: "./img_gundam4/img15.jpg",
                detail1: "Thương hiệu:  RP Studio",
                detail2: "Chất liệu: Nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Kích thước : Kid Buu 25x14x13cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One Piece Film Red – King Of Artist The Shanks",
                price: 399
            },
            {
                id: 16,
                image1: "./img_gundam/img35.jpg",
                image2: "./img_gundam2/img35.jpg",
                image3: "./img_gundam3/img35.jpg",
                image4: "./img_gundam4/img35.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu:  Nhựa cao cấp với độ sắc nét cao",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Kích thước : 17cm",
                name: "DRAGON BALL",
                introduce: "Mô hình lắp ráp Dragon Ball Kid Buu",
                price: 672
            },
            {
                id: 17,
                image1: "./img_gundam/img36.jpg",
                image2: "./img_gundam2/img36.jpg",
                image3: "./img_gundam3/img36.jpg",
                image4: "./img_gundam4/img36.jpg",
                detail1: "Thương hiệu: VT",
                detail2: "Chất liệu: Sắt",
                detail3: "Xuất xứ: Trung Quốc",
                detail4: "",
                name: "DỤNG CỤ",
                introduce: "Kềm Cắt Mô Hình Bandai Spirits High Build Up Nippers",
                price: 450
            },
            {
                id: 18,
                image1: "./img_gundam/img37.jpg",
                image2: "./img_gundam2/img37.jpg",
                image3: "./img_gundam3/img37.jpg",
                image4: "./img_gundam4/img37.jpg",
                detail1: "Thương hiệu: Mr.Hobby",
                detail2: "Chất liệu: Nhựa",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Màu mực: đen (mã GM301)",
                name: "DỤNG CỤ",
                introduce: "Bút kẻ chảy Gundam Marker – GM301",
                price: 70
            },
            {
                id: 18,
                image1: "./img_gundam/img38.jpg",
                image2: "./img_gundam2/img38.jpg",
                image3: "./img_gundam3/img38.jpg",
                image4: "./img_gundam4/img38.jpg",
                detail1: "Thương hiệu: MANWHA",
                detail2: "Chất liệu: Sắt",
                detail3: "Xuất xứ: Trung Quốc",
                detail4: "",
                name: "DỤNG CỤ",
                introduce: "Kềm cắt mô hình 1 lưỡi MANWAH",
                price: 180
            },
            {
                id: 19,
                image1: "./img_gundam/img39.jpg",
                image2: "./img_gundam2/img39.jpg",
                image3: "./img_gundam3/img39.jpg",
                image4: "./img_gundam4/img39.jpg",
                detail1: "Thương hiệu: Bandai Namco",
                detail2: "Chất liệu: Nhựa",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Chiều cao: 12cm",
                name: "DRAGON BALL",
                introduce: "Mô hình lắp ráp Dragon Ball Super Saiyan Broly Full Powers",
                price: 879
            },
            {
                id: 20,
                image1: "./img_gundam/img16.jpg",
                image2: "./img_gundam2/img16.jpg",
                image3: "./img_gundam3/img16.jpg",
                image4: "./img_gundam4/img16.jpg",
                detail1: "Thương hiệu: Banpresto – Bandai Namco",
                detail2: "Chất liệu :  Nhựa cao cấp",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: " Chiều cao : ~ 9cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One Piece – Senkouzekkei – Portgas.D.Ace",
                price: 600
            },
            {
                id: 21,
                image1: "./img_gundam/img17.jpg",
                image2: "./img_gundam2/img17.jpg",
                image3: "./img_gundam3/img17.jpg",
                image4: "./img_gundam4/img17.jpg",
                detail1: "Thương hiệu : Bandai Spirits",
                detail2: "Chất liệu :   PVC, ABS",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : ~ 17cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One Piece – Battle Record Collection – Rorona Zoro",
                price: 429
            },
            {
                id: 22,
                image1: "./img_gundam/img18.jpg",
                image2: "./img_gundam2/img18.jpg",
                image3: "./img_gundam3/img18.jpg",
                image4: "./img_gundam4/img18.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu: Nhựa ABS",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Kích thước : ~ 16cm",
                name: "GUNDAM",
                introduce: "MG Strike Freedom Gundam",
                price: 429
            },
            {
                id: 23,
                image1: "./img_gundam/img40.jpg",
                image2: "./img_gundam2/img40.jpg",
                image3: "./img_gundam3/img40.jpg",
                image4: "./img_gundam4/img40.jpg",
                detail1: "Thương hiệu : Solarain",
                detail2: "Chất liệu : ABS, PVC",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Kích thước : 1/7 - H280mm",
                name: "FIGURE",
                introduce: "Youmu Konpaku Half-Human Half-Phantom Gardener Ver 1/7 - Touhou",
                price: 900
            },
            {
                id: 24,
                image1: "./img_gundam/img20.jpg",
                image2: "./img_gundam2/img20.jpg",
                image3: "./img_gundam3/img20.jpg",
                image4: "./img_gundam4/img20.jpg",
                detail1: "Thương hiệu : Bandai Namco",
                detail2: "Chất liệu : Nhựa cao cấp",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Kích thước : 44 x 33,5 x 12 cm",
                name: "GUNDAM",
                introduce: "Mô hình lắp ráp Gundam MG EX Strike Freedom Gundam",
                price: 200
            },
            {
                id: 25,
                image1: "./img_gundam/img21.jpg",
                image2: "./img_gundam2/img21.jpg",
                image3: "./img_gundam3/img21.jpg",
                image4: "./img_gundam4/img21.jpg",
                detail1: "Thương hiệu : Banpresto – Bandai Namco",
                detail2: "Chất liệu : Nhựa cao cấp",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Chiều cao : ~ 16cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One Piece Film Red DXF – Brook Vol.9",
                price: 429
            },
            {
                id: 26,
                image1: "./img_gundam/img22.jpg",
                image2: "./img_gundam2/img22.jpg",
                image3: "./img_gundam3/img22.jpg",
                image4: "./img_gundam4/img22.jpg",
                detail1: "Thương hiệu: Nuke Matrix",
                detail2: "Chất liệu : ABS, PVC",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "Chiều cao : Tỷ lệ 1/12 , 17cm",
                name: "GUNDAM",
                introduce: "Mô hình lắp ráp CF-06 Cyber Forest Fantasy Girls Mad Wolf Caroline Rolphe",
                price: 150
            },
            {
                id: 27,
                image1: "./img_gundam/img23.jpg",
                image2: "./img_gundam2/img23.jpg",
                image3: "./img_gundam3/img23.jpg",
                image4: "./img_gundam4/img23.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu: Nhựa ABS",
                detail3: "Xuất xứ: Nhật Bản",
                detail4: "",
                name: "GUNDAM",
                introduce: "MG 1/100 GUNDAM EXIA",
                price: 429
            },
            {
                id: 28,
                image1: "./img_gundam/img24.jpg",
                image2: "./img_gundam2/img24.jpg",
                image3: "./img_gundam3/img24.jpg",
                image4: "./img_gundam4/img24.jpg",
                detail1: "Thương hiệu : TT Hongli",
                detail2: "Chất liệu : Nhựa ABS",
                detail3: "Xuất xứ : Trung Quốc",
                detail4: "Chiều cao : 18cm",
                name: "FIGURE-RISE",
                introduce: "Figure-rise Standard Avatar Fumina – Mô hình lắp ráp Bandai",
                price: 100
            },
            {
                id: 29,
                image1: "./img_gundam/img25.jpg",
                image2: "./img_gundam2/img25.jpg",
                image3: "./img_gundam3/img25.jpg",
                image4: "./img_gundam4/img25.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu : Nhựa cao cấp",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Tỉ lệ : 1/144",
                name: "FIGURE-RISE",
                introduce: "HG CE Black Knight Squad Rud-Ro.A (Tentative Ver)",
                price: 125
            },
            {
                id: 30,
                image1: "./img_gundam/img26.jpg",
                image2: "./img_gundam2/img26.jpg",
                image3: "./img_gundam3/img26.jpg",
                image4: "./img_gundam4/img26.jpg",
                detail1: "Thương hiệu : Bandai",
                detail2: "Chất liệu :  Nhựa cao cấp",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Tỉ lệ : 1/144",
                name: "FIGURE-RISE",
                introduce: "30mm eEXM-S03H Forestieri 03 – 30 Minutes Missions",
                price: 122
            },
            {
                id: 31,
                image1: "./img_gundam/img27.jpg",
                image2: "./img_gundam2/img27.jpg",
                image3: "./img_gundam3/img27.jpg",
                image4: "./img_gundam4/img27.jpg",
                detail1: "Thương hiệu: Banpresto - Bandai",
                detail2: "Chất liệu : Nhựa ABS & PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Cao khoảng 16cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "Demon Slayer – Kimetsu no Yaiba – Tanjiro Kamado Vol.19",
                price: 429
            },
            {
                id: 32,
                image1: "./img_gundam/img28.jpg",
                image2: "./img_gundam2/img28.jpg",
                image3: "./img_gundam3/img28.jpg",
                image4: "./img_gundam4/img28.jpg",
                detail1: "Thương hiệu: Banpresto - Bandai",
                detail2: "Chất liệu : PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Cao 36cm",
                name: "DRAGON BALL",
                introduce: "Mô hình lắp ráp Dragon Ball Z Piccolo",
                price: 429
            },
            {
                id: 33,
                image1: "./img_gundam/img29.jpg",
                image2: "./img_gundam2/img29.jpg",
                image3: "./img_gundam3/img29.jpg",
                image4: "./img_gundam4/img29.jpg",
                detail1: "Thương hiệu: BANPRESTO",
                detail2: "Chất liệu : PVC cao cấp ",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : ~ 18cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One Piece DXF – The Grandline Men – Gol D. Roger ",
                price: 828
            },
            {
                id: 34,
                image1: "./img_gundam/img30.jpg",
                image2: "./img_gundam2/img30.jpg",
                image3: "./img_gundam3/img30.jpg",
                image4: "./img_gundam4/img30.jpg",
                detail1: "Thương hiệu: Banpresto – Bandai Namco",
                detail2: "Chất liệu : PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Chiều cao ~ 13cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "Dragon Ball Super – Super Saiyan Gogeta Vol.7",
                price: 124
            },
            {
                id: 35,
                image1: "./img_gundam/img31.jpg",
                image2: "./img_gundam2/img31.jpg",
                image3: "./img_gundam3/img31.jpg",
                image4: "./img_gundam4/img31.jpg",
                detail1: "Thương hiệu: Banpresto - Bandai",
                detail2: "Chất liệu : Nhựa ABS & PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Kích thước: cao khoảng 10cm",
                name: "MÔ HÌNH TĨNH",
                introduce: "One piece – Manhood Special Ver",
                price: 120
            },
            {
                id: 36,
                image1: "./img_gundam/img32.jpg",
                image2: "./img_gundam2/img32.jpg",
                image3: "./img_gundam3/img32.jpg",
                image4: "./img_gundam4/img32.jpg",
                detail1: "Thương hiệu: MOSHI",
                detail2: "Chất liệu : Sắt",
                detail3: "Xuất xứ : Trung Quốc",
                detail4: "Bộ khoan tay bao gồm 5 mũi khoan : 0.8, 1.0, 1.5, 2.0, 2.5 (mm)",
                name: "DỤNG CỤ",
                introduce: "Khoan tay 5 mũi khoan MS-060 Hãng MOSHI",
                price: 149
            },
            {
                id: 37,
                image1: "./img_gundam/img33.jpg",
                image2: "./img_gundam2/img33.jpg",
                image3: "./img_gundam3/img33.jpg",
                image4: "./img_gundam4/img33.jpg",
                detail1: "Thương hiệu:  Mr Hobby (Mr Color)",
                detail2: "Chất liệu : Nhựa",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : 20 x 4 x 1.2 cm",
                name: "DỤNG CỤ",
                introduce: "Bút kẻ lằn chìm Gundam Marker – GM01 GM02 GM03",
                price: 149
            },
            {
                id: 38,
                image1: "./img_gundam/img34.jpg",
                image2: "./img_gundam2/img34.jpg",
                image3: "./img_gundam3/img34.jpg",
                image4: "./img_gundam4/img34.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu : PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Cao khoảng 18cm",
                name: "DRAGON BALL",
                introduce: "Mô hình lắp ráp Dragon Ball Z – Son Goku New Spec Ver",
                price: 674
            },
            {
                id: 39,
                image1: "./img_gundam/img19.jpg",
                image2: "./img_gundam2/img19.jpg",
                image3: "./img_gundam3/img19.jpg",
                image4: "./img_gundam4/img19.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu : Nhựa PVC",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Cao khoảng 21.5cm",
                name: "FIGURE",
                introduce: "Mô hình figure: Luffy Tay Lửa",
                price: 210
            },
            {
                id: 40,
                image1: "./img_gundam/img41.jpg",
                image2: "./img_gundam2/img41.jpg",
                image3: "./img_gundam3/img41.jpg",
                image4: "./img_gundam4/img41.jpg",
                detail1: "Thương hiệu: Bandai",
                detail2: "Chất liệu : PVC cao cấp ",
                detail3: "Xuất xứ : Nhật Bản",
                detail4: "Kích thước : Cao khoảng 20.5cm",
                name: "DRAGON BALL",
                introduce: "Mô hình lắp ráp Dragon Ball Final Form Frieza",
                price: 870
            }
        ];
        localStorage.setItem("product", JSON.stringify(products));
    }
}



chuyenDSSPThanhHTML();
function chuyenDSSPThanhHTML() {
    let DanhSachSanPham = JSON.parse(localStorage.getItem("product"));
    let nodeListProducts = document.querySelector(".list__product");
    let HTMLDSSP = '<div class="card__items" id="card__items--one">';
    for (let i = 0; i < DanhSachSanPham.length; i++) {
        let sanpham = DanhSachSanPham[i];
        let htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanpham);
        HTMLDSSP = HTMLDSSP + htmlSanPham;
    }
    HTMLDSSP = HTMLDSSP + '</div>';
    nodeListProducts.innerHTML = HTMLDSSP;
}


function chuyenDoiTuongSanPhamThanhHTML(sanpham) {
    let html = '';
    html += `<div class="card__item" id="card__item--one">`
    html += `<div class="card__img">`
    html += `<img src="` + sanpham.image1 + `" alt="">`
    html += `<img src="` + sanpham.image2+ `" alt="" id="img__after">`
    html += `</div>`
    html += `<div class="card__name">`
    html += `<p>`+sanpham.name+`</p>`
    html += `</div>`
    html += `<div class="card__introduce">`
    html += ``+sanpham.introduce+``
    html += `</div>`
    html += ` <div class="card__price" data__price="`+(sanpham.price*1000).toLocaleString()+`">`
    html += `<p><span>`+(sanpham.price*1000).toLocaleString()+`</span><sup>VNĐ</sup></p>`
    html += `</div>`
    html += `<div class="card__action">`
    html += `<button class="card__view">`
    html += `View`
    html += `</button>`
    html += `<button class="card__addcart">`
    html += `Add Cart`
    html += `</button>`
    html += `</div>`
    html += `<div class="imgs__hidden">`
    html += `<div class="img3__hidden">`
    html += `  <img src="`+sanpham.image3+`" alt="">`
    html += ` </div>`
    html += `<div class="img4__hidden">`
    html += `<img src="`+sanpham.image4+`" alt="">`
    html += `</div>`
    html += `</div>`
    html += `<div class="details__hidden">`
    html += `<div class="detail1">`
    html += ``+sanpham.detail1+``
    html +=`</div>`
    html += `<div class="detail2">`
    html+= ``+sanpham.detail2+``
    html += ` </div>`
    html += `<div class="detail3">`
    html+= ``+sanpham.detail3+``
    html += ` </div>`
    html += `<div class="detail4">`
    html+=``+sanpham.detail4+``
    html += ` </div>`
    html += `</div>`
    html += `</div>`
    return html;
}




