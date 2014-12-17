(function($){
  $.fn.swipeList = function(op){
    /**
     * @prop targetEle {element} [.js-swipeListTarget] スワイプターゲット要素
     * @prop btnEle {element} ボタン親要素
     * @prop triggerMove {number} [60] スワイプトリガー数値
     * @prop speed {number} アニメーションスピード
     * @prop easing {string} [ease] イージング
     * @prop direction {string} スワイプ方向
    */
    op = $.extend({
      targetEle : ".js-swipeListTarget",
      btnEle : ".js-swipeListBtn",
      triggerMove: 60,
      speed: 300,
      easing: "ease",
      direction: "left"
    },op);

    return this.each(function(){
      var $this = $(this);
      ({
        /**
         * 初期設定 イベント登録
        */
        init: function(){
          $this.find(op.targetEle).on("touchstart", this.swipeStert);
          $this.find(op.targetEle).on("touchmove", this.swipeMove);
          $this.find(op.targetEle).on("touchend", this.swipeEnd);
        },
        /**
         * touchstartイベント
         * @prop start {number} 開始位置
         * @param e {events} イベントオブジェクト
        */
        swipeStert: function(e){
          this.start = e.originalEvent.touches[0].pageX;
          $this.find(op.targetEle).css("transition", "all 1ms ease");
          if(this.flagMove){
            $this.find(op.targetEle).css("transition", "all " + op.speed + "ms " + op.easing + "");
            $this.find(op.targetEle).css("transform", "translate3d(0, 0, 0)");
            this.move = 0;
            this.moveVal = 0;
            this.flagMove = false;
            return false;
          }
        },
        /**
         * touchmoveイベント
         * @prop move {number} 移動距離
         * @prop moveVal {number} 開始位置 - 移動距離
         * @param e {events} イベントオブジェクト
        */
        swipeMove: function(e){
          this.move = e.originalEvent.touches[0].pageX;
          this.moveVal = this.start - this.move;
          if(op.direction == "left"){
            if(this.moveVal > 5){
              e.preventDefault();
            }
            if(this.moveVal > 0){
              $this.find(op.targetEle).css("transform", "translate3d(-" + this.moveVal + "px, 0, 0)");
            }
          }else{
            if(this.moveVal < 5){
              e.preventDefault();
            }
            if(this.moveVal < 0){
              $this.find(op.targetEle).css("transform", "translate3d(" + Math.abs(this.moveVal) + "px, 0, 0)");
            }
          }
        },
        /**
         * touchendイベント
         * @prop baseVal {number} 目標までの移動距離 (ボタン幅)
         * @param e {events} イベントオブジェクト
        */
        swipeEnd: function(e){
          this.baseVal = $this.find(op.btnEle).innerWidth();
          $this.find(op.targetEle).css("transition", "all " + op.speed + "ms " + op.easing + "");
          if(op.direction == "left"){
            if(this.moveVal > op.triggerMove){
              $this.find(op.targetEle).css("transform", "translate3d(-" + this.baseVal + "px, 0, 0)");
              this.flagMove = true;
            }else{
              $this.find(op.targetEle).css("transform", "translate3d(0, 0, 0)");
            }
          }else{
            if(this.moveVal < "-" + op.triggerMove){
              $this.find(op.targetEle).css("transform", "translate3d(" + Math.abs(this.baseVal) + "px, 0, 0)");
              this.flagMove = true;
            }else{
              $this.find(op.targetEle).css("transform", "translate3d(0, 0, 0)");
            }
          }
        }
      }).init();
    });
  }
})(jQuery);