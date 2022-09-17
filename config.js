// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "HÔM NAY LÀ...",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "MỘT NGÀY BÌNH THƯỜNG",  // 同上...
        "NHƯNG NÓ Ý NGHĨA HƠN, BỞI VÌ...",
        "NHIỀU NĂM TRƯỚC...",
        "VÀO ĐÚNG NGÀY NÀY",
        "CÓ MỘT NGƯỜI CON GÁI ĐƯỢC SINH RA",
        "ĐÓ LÀ...",
        "CHỊ...NGUYỄN HUỆ...",
        "THẬT TUYỆT VỜI PHẢI KHÔNG,",
        "VÌ VẬY...",
        "HÔM NAY...",
        "NHÂN NGÀY ĐẶC BIỆT NÀY",
        "EM CHÚC MỪNG SINH NHẬT CHỊ",
        "HAPPY BIRTHDAY TO YOU",
        "CHÚC CHỊ SANG TUỔI MỚI...",
        "LUÔN MẠNH KHỎE,",
        "XINH ĐẸP,",
        "VUI VẺ,",
        "MỌI ĐIỀU NHƯ Ý SẼ ĐẾN VỚI CHỊ",
        "THANK YOU SO MUCH",
        "LONG Handsome~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "CHỊ...NGUYỄN HUỆ...": "./imgs/hue.jpg",
        //"今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bật đèn",
        play: "Âm nhạc",
        bannar_coming: "màu sắc",
        balloons_flying: "Có vẻ như thiếu một cái gì đó",
        cake_fadein: "Bánh？",
        light_candle: "Nến？",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
