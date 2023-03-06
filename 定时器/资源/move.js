function move(obj, direction, step, threshold, fps,callback) {
        //每次点击时，先关闭上一次的定时器，防止div的速度越来越快
        clearInterval(obj.result);
    obj.result = setInterval(function () {
        // 这里判断不能用box0.style.marginleft，因为默认读取的是内联样式中的属性
        if (parseInt(getComputedStyle(obj, null)[direction]) < threshold) {
            obj.style[direction] = parseInt(getComputedStyle(obj, null)[direction]) + step + 'px';
            //防止因为步长的原因超出阈值
            if (parseInt(getComputedStyle(obj, null)[direction]) >= threshold) {
                obj.style[direction] = threshold + 'px';
                //关闭定时器
                clearInterval(obj.result);
                callback && callback ();
            }
        } else {
            obj.style[direction] = parseInt(getComputedStyle(obj, null)[direction]) - step + 'px';
            //防止因为步长的原因超出阈值
            if (parseInt(getComputedStyle(obj, null)[direction]) <= threshold) {
                obj.style[direction] = threshold + 'px';
                //关闭定时器
                clearInterval(obj.result);
               callback && callback ();
            }
        }


    }, fps)


};