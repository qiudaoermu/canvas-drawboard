const config = {
  PATH_LINEWIDTH: 1,
  PATH_STROKESTYLE: "#E1EE51",
  POINT_LINEWIDTH: 2,
  POINT_STROKESTYLE: "#999",
  POINT_RADIS: 5,
};
// 这是上传图像
var imgUploadA = new Image();
// 绘制
const base64A =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACdCAMAAACZ+IrkAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAmpQTFRFAAAAYGBgampqbGxsbW1tf39/cnJycXFxcHBwcHBwb29vb29vb29vb29vcHBwampqb29vcXFxcXFxcHBwcHBwdHR0f39/cXFxb29vcXFxcHBwcXFxb29vcHBwcHBwb29vcHBwcHBwdnZ2b29vcHBwcHBwcnJyfHx8hYWFj4+Pa2trb29vcHBwcHBweXl5jIyMoKCgtLS0yMjI29vb5eXl7u7u+Pj4////cHBwcXFxcHBwe3t7mpqav7+/4ODg9PT0wcHBn5+fc3NzcHBwb29vf39/np6evb2939/f4+PjwsLCoaGhgICAcHBwb29vcHBwpqam0tLScHBwcHBwmJiYxcXF8vLycHBwgoKCt7e35OTkcnJyi4uLwMDA9vb2lJSUycnJcXFxlZWVcHBwenp6vr6+b29vcHBwo6Oj5+fncHBwiIiIzMzMqamp9fX1cXFxcXFxcHBwiYmJ2NjYcHBw8PDwcHBwcHBwxsbGvLy8cHBw1NTU4uLi09PT8fHx6enp6urq3t7e1dXVw8PDurq6+/v77e3t0dHRl5eXc3Nzfn5+sbGxjo6OfX197+/vqqqqk5OT19fXz8/PpKSkd3d3/f394eHhra2tgYGBm5ub3NzcpaWlrKystra2zs7OysrKjY2Nx8fHmZmZ1tbWqKioq6ursrKyu7u7r6+vkpKSxMTE2tra/v7++fn5nJyc8/PzoqKihISE6+vr+vr6g4ODhoaGdHR0h4eHkJCQioqKcHBwcHBwy8vLcHBw7OzscHBwcHBwrq6u0NDQeHh4p6enlpaWkZGR2dnZsLCwnZ2ddXV13d3dtbW19/f33yaBkwAAAM50Uk5TAAgYKDgGL1iCq8fX5/f/DE6Ks9xLCwRGh8W9eD4iba7s6RplsPv/////E16p9P////////////8gg+b/////////KIvu//////////8wk/X//5L9////3f///zj//////87/dP//F6L//9H/////hf+N//+q/8Lb///z////////////////////////////////////////////////////////////////////////////////////w8v/0//j6///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";
imgUploadA.src = base64A;

var imgUploadB = new Image();
// 绘制
const base64B =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACdCAMAAACZ+IrkAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnBQTFRFAAAAYGBgampqbGxsbW1tf39/cnJycXFxcHBwcHBwb29vb29vb29vb29vcHBwampqb29vcXFxcXFxcHBwcHBwdHR0f39/cXFxb29vcXFxcHBwcXFxb29vcHBwcHBwb29vcHBwcHBwdnZ2b29vcHBwcHBwcnJyfHx8hYWFj4+Pa2trb29vcHBwcHBweXl5jIyMoKCgtLS0yMjI29vb5eXl7u7u+Pj4////cHBwcXFxcHBwe3t7mpqav7+/4ODg9PT0wcHBn5+fc3NzcHBwb29vf39/np6evb2939/f4+PjwsLCoaGhgICAcHBwb29vcHBwpqam0tLScHBwcHBwmJiYxcXF8vLycHBwgoKCt7e35OTkcnJyi4uLwMDA9vb2lJSUycnJcXFxlZWVcHBwenp6vr6+b29vcHBwo6Oj5+fncHBwiIiIzMzMqamp9fX1cXFxcXFxcHBwiYmJ2NjYcHBw8PDwcHBwcHBwxsbGvLy8cHBw1NTU4uLi09PT8fHx6enp3Nzc9/f3gYGBjY2NsrKy19fXnZ2dzs7OrKysmZmZoqKitra23d3dpKSkdHR0z8/P6OjosbGxfn5++vr6urq66+vrqKiohoaG/f392dnZra2tsLCwzc3Nl5eX0dHRm5ubw8PDx8fHq6urhISEg4OD7OzslpaWdnZ2ioqKs7OzfX194eHhy8vL+/v7u7u7p6enh4eHrq6u5ubmkZGReHh4paWl1tbWkJCQqqqqd3d37+/v3t7ecHBwcHBwcHBwysrKdXV1cHBwcHBw/Pz8jo6O7e3t1dXV8/Pzc3Nzubm5r6+vkpKS6urq+fn5uLi4nJycZENiRQAAANB0Uk5TAAgYKDgGL1iCq8fX5/f/DE6Ks9xLCwRGh8W9eD4iba7s6RplsPv/////E16p9P////////////8gg+b/////////KIvu//////////8wk/X//5L9////3f///zj//////87/dP//F6L//9H/////hf+N//+q/8Lb///z///////////////////////////////////////////////////////////////////////////////////////Dy9P//+Pr//////////////////By2nsAAAnsSURBVHiczVz5QxVFHF8PVFA30ZTMPOISPB6XvBENvBEJERDQp1wSKIqYgqipZUmahmJmQFlppZZZZqe35tlJ9S/15trd997Ozux7u4/5/LL7dr8z38/bmZ35zvf73VEUxzBk6LDhw4cNHeJcjQ4gZsTIUbFxo8eMVQnGjhkdFztq5IiYQSb2zLj48RNUJiaMj3924uAwm5Tw3GQ2MR3PT3lhUpSpTZ02fYYINYwXY6dNjRq1xKTkFDMSqTPT0tPTZqaa3UtJTkqMArVZs+fMDVTsycjMys6Zl+sFBN7ceTnZWZkZnkC5uXNmz3KX2/y8BUaFC1/KL1gEmFhUsHjJTKP8grz57nFbumy5rmlF4coiNjEdq4pfLtFLLV+21B1uq0vX6K1ZVi7CjKK8TG/lNaWrneeWWLFWU1BZVW2HG0R1VaVWfG2F0y9I0jpa93rfBrvUMDb41tM61iU5yW1jMq23prYuPG4QdbU1tJ7kjU5xm5hHh7f6hvCpYTTU0wEwz5k5LmETqbDR1pvAQnkjqW5TggPkXiGVNTU7wQ2iuYlU+Uqk3DZvITW1bHWKHABbW0ilWzZHRC5hG66mdbtz3CC2t+J6t0XSurRV23Y4Sw6AHW0Rt+6ruIKdi53mBrF4J669Ikxyu3Dx9g43yAHQ0Y7r3x0WOfI+ZHa6Qw6AzkysYU8Y5OJwUZ9b3CB8WMde2+SIYb7PTXIAvIa17LdJbj8udsBdcv53A+uZYYvcXlzooNvkAHgda4qzQW4PLvKG++QAOESmDWFyu3GBaHCDwNp2CZKrwOKHosXuDazvVSFyZPp6PVrkADgoPqklYFFXZi8WDmCdfJNgM7ZKXosmOQD2YYuFa1BtcX+GMINP6MXFnS4z2uQAyBToerjTtbs28bPR2c7tehPRAmenSyaTNTqQvbfJYqWWF/3XVQeecvOY5DaidWvb4JADABnzKcxlOFrxtzq+hhDFDrQUSmaQS0KP1uHVlx1sRwTMfSyJyJHTMnjkAEDr3HWmHio0+Tc5uKi2j63IS2C2SluN/HOOuSPCQzPksNbE/VgKbzQOLjkAkAuoNITcUuR2dcTLFAnKIYs1Ib7lZfBy/WCTAwD595YFkZuPvOkROw8jRwPksTwocIDmsJrBpgZREzqfzUJBklrndVV3NGe/mWunRC1ksiAgKjQbXlofgcPaDG/tazmMTXJP19urREvVIc/8bCO7OS4YxEe6VCOOviNYDpnJcwzkElFgLsw4hJWSADSKzUMboOxcw3SG5v9KG6oPlecfO/5ud8MJlhXtPRlCTlV7TglVXhlkCyDTqUqQ2XunGz26xvd9BSYyJ0y4CXeeKiipG1JTodXpEYt9nfnAE6yyMCdYqJdBTlVFGrcaakjRouHTYLkyIXIHM8x09nkDhLytTHb9HwooKYOS0yi7WPhLaIr9iKG0tdco1cckp6pnBbSgyXY6ITfpRf+PEhFyoe+hhhO61BHD5cPHP/7knaxPDVdEHJYr/HIzSCbGC7DQy5GRM/YoPRLbeI5cOnBeu3ZeQFEhFCRL2ynwvJhf5jMrcmoPpfc5vdJvNCq+sPPwVkK55zC75+E5f6Y5GEjmQv3FwNyO1ktY7kvy+6vAtAGtywo8vCIoNxmRmwhPZ/KLtOlELufjQa6z6Osr+lXcOb6hP78NKl9r4+EthHLPQHbPwrMl3AKGR5d/1XD9k5f06/B3FvnxXUgNtO9d47NDdY6D7OLhGd87oT26ruAMlGtaa8MX93t8bjIvEh+i2s9nlw/l4iG78fDMbDoKhJZyEHrrB3qrEIAcchoyfwD94fE90gVQbDxkh1LULDJyMH6kDMxMVG2oKaKnp83qoA/vcy67RVBsgp9cDDzxcOUbSM2mHfTDn8jds4BMYqbz6Zmf8c1fuNqAB8rFKMoIeMzgipfhiq9cMr17nbBr2oqP7eaVkHH6Mp8dms5HKMpIeOS7Ym9YtJgfHxN6pGFvmkutxHdv8dkhR+1IRRkFj1lccdJi8xi3c0mjEbHgsY6giPwHvrGGxqVRxEDJ5oof5vzrm6oR5u0PbpPbd7jqsqFYrKLchUez9z8QqJuqF5n3c4zk0lhSquWjDa4uTlHuWTWYDjyn/sQWMFpJzNmAZOLxDfh5UGy0otyHR/56GM18VlZgg4HdryyhG6LscqHYGBIo9nLFSQIE26lc/UBnx4w6Hxdl54ViYxXlof+QypWmDWfRQXVrQL3NkskUZYd70hDlkSpkP5Vx623W2TGXNvxaKFA261CUn8B8x3QQw8jCw6cvExcyZc4Ks0uDcsMUuJZN50t3EM0WC9LLlB1jHgPafxRglw7lhouye9yDK+5mi2iWypfOsRNsWbxO8puOj5kS5yg7dszDdssKvhXaiowdC9I6HstUCOOtEBxR8OitWi6p6IjHVm57RBEcjbWRVP2GKZHOZWd7NBacyQA4RXSz3UF9XHZPeL2Dgs5kglaAH9Q8/4glUMxl9xUW4K+xqBUgaEEB3QXB7Hk5PHZPiQA/BEwtKEHr04/HxBJQWf7p93jsfsP3m/i6qPUpaLlD5BPtLCvPy2NH1hUCgz+13AVXPRC/k/ADdkmY4A8OO/LanOSroqsewRUjAp2rHjC6Nc/0JSn4f/I10RWj4GoboZdmqDPiuF0cdivwfYHAgAfKxQh7KjD+Ui271nlrdnWkMD9so3kqRL08CKs0h6JpgS+s2ZWTsme4enQvj6CH7GrDsfSdKhM9TSVpNX8TdicKVv048LTz97p/AqzkbnxbwCLSPWRi3sWBenNWPKQuvJhRf7Tsh3+Lt19fgi8JDBC6d1HMM5vPJmAXApmHumdWzKsd5qMzAz9FzeDVFosIHHOOHd+AMkYEhKIp5dYKnaVnjKYIRaLq1nM02gEvs8QYiRKL4jVwNNqCtaqAKJ5gBNTX01/Z58Pwy7f6KLpPH7v27tHKeoy/0zPa+y+WXGm61cMcHo9bawqMgNqJHmOc8nSJxIG9vXfOfdbd9t+Twz0B7Jg+KoSg6LG9yDvWa0cY89Q7LseCCoq8289aCAfER3WdKxicteBGxkcIsHF4gSsXkvHhSrZMMAZQ3/uAKxeSLeNOplEw4FRdf5UnZZJp5FqWVgCOrPx2gCtkkqUld4ab5NmBcmdWSp6VKndGr+TZ0HJnkkuehS/3FwySf/0h+Zczcn91JPkXW3J/7Sb5l4KSf2Up+Reqcn/dK/mX0ZJ/VS75F/mS72Yg+U4Qku+iIfkOJJLv3iL5zjeS7xok+Y5Lku9WJflOX5LvkqbIvcOcIvnufJLvbKjIvSskhMw7aiqS70aqyL2TK4TMu+BCyLyDMITMuy8jSLxzNYbEu35jSLxjOoG8u81rQDv13713f+/DR/tTUvY/erj3/r27Du3U/z+3w6o8pKw76AAAAABJRU5ErkJggg==";

imgUploadB.src = base64B;

var imgUploadArraw = new Image();
const base64Arraw =
  "data:image/png;base64,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";

imgUploadArraw.src = base64Arraw;
class Graph {
  constructor(point, options = {}) {
    this.x = Math.round(point.x);
    this.y = Math.round(point.y);
    this.points = [];
    this.points.push(point);
    this.options = options;
    this.path_lineWidth = options.path_lineWidth || config.PATH_LINEWIDTH;
    this.path_strokeStyle = options.path_strokeStyle || config.PATH_STROKESTYLE;
    this.point_radis = options.point_radis || config.POINT_RADIS;
    this.point_lineWidth = options.point_lineWidth || config.POINT_LINEWIDTH;
    this.point_strokeStyle =
      options.point_strokeStyle || config.POINT_STROKESTYLE;
  }
  computedCenter() {
    let x_sum = 0,
      y_sum = 0;
    this.points.forEach((p) => {
      x_sum += p.x;
      y_sum += p.y;
    });
    this.x = Math.round(x_sum / this.points.length);
    this.y = Math.round(y_sum / this.points.length);
  }
  move(startPoint, endPoint) {
    let x1 = endPoint.x - startPoint.x;
    let y1 = endPoint.y - startPoint.y;
    this.points = this.points.map((item) => {
      let x = item.x + x1;
      let y = item.y + y1;
      return {
        x,
        y,
      };
    });
    this.computedCenter();
  }
  update(i, point) {
    this.points[i] = point;
    this.computedCenter();
  }
  createPath(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.path_lineWidth;
    ctx.strokeStyle = this.path_strokeStyle;
    this.points.forEach((p, i) => {
      ctx[i == 0 ? "moveTo" : "lineTo"](p.x, p.y);
    });
    ctx.closePath();
  }
  isInPath(ctx, point) {
    // in the point
    for (let i = 0; i < this.points.length; i++) {
      ctx.beginPath();
      ctx.arc(
        this.points[i].x,
        this.points[i].y,
        this.point_radis,
        0,
        Math.PI * 2,
        false
      );
      if (ctx.isPointInPath(point.x, point.y)) {
        return i;
      }
    }
    // in the figure
    this.createPath(ctx);
    if (ctx.isPointInPath(point.x, point.y)) {
      return 999;
    }
    return -1;
  }
  // Draw a circle for each point
  // drawPoints(ctx) {
  //   ctx.save();
  //   ctx.lineWidth = this.point_lineWidth;
  //   ctx.strokeStyle = this.point_strokeStyle;
  //   this.points.forEach(p => {
  //     ctx.beginPath();
  //     ctx.arc(p.x, p.y, this.point_radis, 0, Math.PI * 2, false);
  //     ctx.stroke();
  //   });
  //   ctx.restore();
  // }
  // Draw a cube for each point
  drawPoints(ctx, color) {
    // ctx.save();
    ctx.lineWidth = this.point_lineWidth;
    ctx.strokeStyle = color || this.point_strokeStyle;
    ctx.fillStyle = color || this.point_strokeStyle;
    this.points.forEach((p) => {
      ctx.beginPath();
      ctx.moveTo(p.x - this.point_radis, p.y - this.point_radis);
      ctx.lineTo(p.x - this.point_radis, p.y + this.point_radis);
      ctx.lineTo(p.x + this.point_radis, p.y + this.point_radis);
      ctx.lineTo(p.x + this.point_radis, p.y - this.point_radis);
      ctx.closePath();
      ctx.fill();
    });
    // ctx.restore();
  }
  draw(ctx) {
    if (!ctx) return;
    this.createPath(ctx);
    ctx.stroke();
    ctx.restore();
  }
}

/**
 * Polyline
 */
class Polyline extends Graph {
  constructor(point, options, direction) {
    super(point, options);
    this.type = "polyline";
    this.direction = direction;
  }
  // overwrite the function because it does not need to close the path
  createPath(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.path_lineWidth;
    ctx.strokeStyle = this.path_strokeStyle;
    this.points.forEach((p, i) => {
      ctx[i == 0 ? "moveTo" : "lineTo"](p.x, p.y);
    });
    ctx.stroke();
    let [startPoint, endPoint] = this.points;
    this.drawVertiaclLine(ctx, startPoint, endPoint);
  }
  drawArrow(ctx, fromX, fromY, toX, toY, theta, headlen, width, color) {
    theta = typeof theta != "undefined" ? theta : 30;
    headlen = typeof theta != "undefined" ? headlen : 10;
    width = typeof width != "undefined" ? width : 1;
    color = typeof color != "color" ? color : "#000";

    // 计算各角度和对应的P2,P3坐标
    var angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI,
      angle1 = ((angle + theta) * Math.PI) / 180,
      angle2 = ((angle - theta) * Math.PI) / 180,
      topX = headlen * Math.cos(angle1),
      topY = headlen * Math.sin(angle1),
      botX = headlen * Math.cos(angle2),
      botY = headlen * Math.sin(angle2);

    ctx.save();
    ctx.beginPath();

    var arrowX = fromX - topX,
      arrowY = fromY - topY;

    ctx.moveTo(arrowX, arrowY);
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    arrowX = toX + topX;
    arrowY = toY + topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    arrowX = toX + botX;
    arrowY = toY + botY;
    ctx.lineTo(arrowX, arrowY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
  }
  // 垂直线文字
  drawVertiaclLine(ctx, startPoint, endPoint) {
    if (startPoint && endPoint) {
      this.drawPoints(ctx, "yellow");

      ctx.fill();
      ctx.beginPath();
      let y = startPoint.y - endPoint.y;
      let x = startPoint.x - endPoint.x;
      const radian = Math.atan2(y, x);
      const angle = (180 / Math.PI) * radian;
      // Rotated rectangle
      let middlePointY = y / 2 + endPoint.y;

      ctx.strokeStyle = "yellow";
      const midPoint = {
        x: endPoint.x + (startPoint.x - endPoint.x) * 0.5,
        y: endPoint.y + (startPoint.y - endPoint.y) * 0.5,
      };
      /*
       * 画垂直线
       */

      ctx.lineWidth = 8;
      // ctx.save();
      // translate to midpoint20
      ctx.translate(midPoint.x, midPoint.y);
      // rotate some angle (radians)
      ctx.rotate((90 * Math.PI) / 180); // = 90°
      // translate back
      ctx.translate(-midPoint.x, -midPoint.y);
      // ctx.drawImage(imgUploadArraw, startPoint.x, startPoint.y, 50, 1000);
      // ctx.restore();
      if (this.direction === "A->B") {
        this.drawArrow(
          ctx,
          midPoint.x,
          midPoint.y,
          endPoint.x,
          endPoint.y,
          35,
          25,
          1,
          "#d6f"
        );
        ctx.lineTo(endPoint.x, endPoint.y);
      } else {
        this.drawArrow(
          ctx,
          midPoint.x,
          midPoint.y,
          startPoint.x,
          startPoint.y,
          35,
          25,
          1,
          "#d6f"
        );
      }
      /*
       * 画文字AB
       */
      ctx.drawImage(imgUploadA, startPoint.x, startPoint.y, 50, 50);
      ctx.drawImage(imgUploadB, endPoint.x, endPoint.y - 50, 50, 50);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
  initPoint(ctx, point) {
    // 是否在某一个点中
    for (let i = 0; i < this.points.length; i++) {
      ctx.beginPath();
      ctx.arc(this.points[i].x, this.points[i].y, 8, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();
    }
  }
  // it is not a closed figure, it cant be in the figure
  isInPath(ctx, point) {
    // 是否在某一个点中
    for (let i = 0; i < this.points.length; i++) {
      ctx.beginPath();
      ctx.arc(
        this.points[i].x,
        this.points[i].y,
        this.point_radis,
        0,
        Math.PI * 2,
        false
      );
      console.log("isInPath");
      if (ctx.isPointInPath(point.x, point.y)) {
        return i;
      }
    }
  }
  triggerEndCondition(ctx, point) {
    debugger;
    if (this.points.length > 1 && this.isInPath(ctx, point) === 0) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Polygon
 */
class Polygon extends Graph {
  constructor(point, options) {
    super(point, options);
    this.type = "polygon";
  }
  triggerEndCondition(ctx, point) {
    if (this.points.length > 1 && this.isInPath(ctx, point) === 0) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Rectangle
 */
class Rectangle extends Graph {
  constructor(point, options) {
    super(point, options);
    this.points = [point, point, point, point];
    this.type = "rectangle";
  }
  initFigure(startPoint, endPoint) {
    let x1 = Math.round(startPoint.x),
      y1 = Math.round(startPoint.y),
      x2 = Math.round(endPoint.x),
      y2 = Math.round(endPoint.y);
    this.points[0] = {
      x: x1,
      y: y1,
    };
    this.points[1] = {
      x: x2,
      y: y1,
    };
    this.points[2] = {
      x: x2,
      y: y2,
    };
    this.points[3] = {
      x: x1,
      y: y2,
    };
    this.x = Math.round((x1 + x2) / 2);
    this.y = Math.round((y1 + y2) / 2);
  }
  update(i, point) {
    this.points[i] = point;
    if (i == 0) {
      this.points[1].y = point.y;
      this.points[3].x = point.x;
    } else if (i == 1) {
      this.points[2].x = point.x;
      this.points[0].y = point.y;
    } else if (i == 2) {
      this.points[3].y = point.y;
      this.points[1].x = point.x;
    } else {
      this.points[0].x = point.x;
      this.points[2].y = point.y;
    }
    this.computedCenter();
  }
}

/**
 * Point
 */
class Point extends Graph {
  constructor(point, options) {
    super(point, options);
    this.points = [point];
    this.type = "point";
  }
  createPath(ctx) {
    if (!ctx) return;
    ctx.beginPath();
    ctx.lineWidth = this.path_lineWidth;
    ctx.fillStyle = this.path_strokeStyle;
    ctx.strokeStyle = this.path_strokeStyle;
    ctx.arc(this.points[0].x, this.points[0].y, 3, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
}

/**
 * factory function for creating graph
 **/
export default function figureFactory(type, point, options, direction) {
  switch (type) {
    case "rectangle":
      return new Rectangle(point, options);
    case "polygon":
      return new Polygon(point, options);
    case "polyline":
      return new Polyline(point, options, direction);
    case "point":
      return new Point(point, options);
    default:
      return new Rectangle(point, options);
  }
}
