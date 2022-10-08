const img = document.getElementsByTagName("img")[0];
const canv = document.getElementsByTagName("canvas")[0];
const but = document.getElementsByTagName("button")[0];

canv.width = img.clientWidth;
canv.height = img.clientHeight;

but.addEventListener('click', function (e) {
    const ctx = canv.getContext('2d');
    
    // 把图片画到canvas上
    ctx.drawImage(img, 0, 0);

    // 获取canvas上的图片信息
    const imgDate = ctx.getImageData(0, 0, img.clientWidth, img.clientHeight);

    for (let i = 0; i < imgDate.data.length; i += 4){
        const r = imgDate.data[i];
        const g = imgDate.data[i + 1];
        const b = imgDate.data[i + 2];

        const avg = (r + g + b) / 3;
        imgDate.data[i] = imgDate.data[i + 1] = imgDate.data[i + 2] = avg;
    }

    //把图片数据设置到画布
    ctx.putImageData(imgDate, 0, 0);
},false)
