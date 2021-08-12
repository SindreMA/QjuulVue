
<template>
  <spacer
    :id="id"
    :key="key"
    :ref="ref"
    :class="className"
    :href="href"
    @click="click"
    @blur="blur"
    @focus="focus"
    @keypress="keypress"
    @mouseover="mouseover"
    @mouseout="mouseout"
    @mouseenter="mouseenter"
    @mouseleave="mouseleaved"
    @resize="resized"
    @submit="submitd"
    :style="getStyles"
  >
    <slot />
  </spacer>
</template>

<script lang="ts">
export default {
  props: {
    f: [Boolean],
    fc: [Boolean],
    flex: [String],
    frtl: [Boolean],
    frtr: [Boolean],
    frbr: [Boolean],
    frcl: [Boolean],
    frbl: [Boolean],
    frcr: [Boolean],
    frtc: [Boolean],
    frbc: [Boolean],
    frcc: [Boolean],
    fctr: [Boolean],
    fctl: [Boolean],
    fcbr: [Boolean],
    fccr: [Boolean],
    fccl: [Boolean],
    fctc: [Boolean],
    fcbc: [Boolean],
    fcbl: [Boolean],
    fccc: [Boolean],
    fw: [Boolean],
    fwr: [Boolean],
    f1: [Boolean],
    f2: [Boolean],
    f3: [Boolean],
    fs0: [Boolean],
    fsb: [Boolean],
    fse: [Boolean],
    fsa: [Boolean],
    fflex: [String],
    co: [String],
    foWe: [String],
    bold: [String],
    foSi: [String],
    w100: [Boolean],
    pa: [String],
    wmax: [Boolean],
    mh: [String],
    he: [String],
    ma: [String],
    baCo: [String],
    label: [String],
    ovAu: [Boolean],
    pointer: [Boolean],
    ellipsis: [Boolean],
    po: [String],
    ov: [String],
    hide: [Boolean],
    nowrap: [Boolean],
    z: [String],
    z1: [Boolean],
    wi: [String],
    maxw: [String],
    op: [String],
    top: [String],
    bo: [String],
    boRa: [String],
    le: [String],
    ri: [String],
    liHe: [String],
    maxh: [String],
    foIt: [Boolean],
    minh: [String],
    minw: [String],
    uppercase: [Boolean],
    lowercase: [Boolean],
    bor: [String],
    vw100: [Boolean],
    vh100: [Boolean],
    h100: [Boolean],
    notvisible: [Boolean],
    txal: [String],
    id: [String, Number],
    key: [String, Number],
    ref: [String, Number],
    className: [String],
    href: [String],
    click: [Function],
    blur: [Function],
    focus: [Function],
    keypress: [Function],
    mouseover: [Function],
    mouseout: [Function],
    mouseenter: [Function],
    mouseleave: [Function],
    resize: [Function],
    submit: [Function],
  },
  methods: {
    pxToRem(px: String, set1RM?: any) {
      if (set1RM === void 0) {
        set1RM = "16px";
      }
      var regex = /[^px]+/;
      var pxValue: any = px.match(regex);
      var rmValue = set1RM.match(regex);
      return +pxValue[0] / +rmValue[0] + "rem";
    },
  },
  computed: {
    getStyles(): any {
      return `
            ${
              this.frtl &&
              "display:flex; justify-content: flex-start; align-items: flex-start;"
            };
            ${
              this.frtr &&
              "display:flex; justify-content: flex-end; align-items: flex-start;"
            };
            ${
              this.frbl &&
              "display:flex; justify-content: flex-start; align-items: flex-end;"
            };
            ${
              this.frbr &&
              "display:flex; justify-content: flex-end; align-items: flex-end;"
            };
            ${
              this.frcl &&
              "display:flex; justify-content: flex-start; align-items: center;"
            };
            ${
              this.frcr &&
              "display:flex; justify-content: flex-end; align-items: center;"
            };
            ${
              this.frtc &&
              "display:flex; justify-content: center; align-items: flex-start;"
            };
            ${
              this.frbc &&
              "display:flex; justify-content: center; align-items: flex-end;"
            };
            ${
              this.frcc &&
              "display:flex; justify-content: center; align-items: center;"
            };
            ${
              this.fctl &&
              "display:flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;"
            };
            ${
              this.fctr &&
              "display:flex; flex-direction: column; align-items: flex-end; justify-content: flex-start;"
            };
            ${
              this.fcbl &&
              "display:flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;"
            };
            ${
              this.fcbr &&
              "display:flex; flex-direction: column; align-items: flex-end; justify-content: flex-end;"
            };
            ${
              this.fccl &&
              "display:flex; flex-direction: column; align-items: flex-start; justify-content: center;"
            };
            ${
              this.fccr &&
              "display:flex; flex-direction: column; align-items: flex-end; justify-content: center;"
            };
            ${
              this.fctc &&
              "display:flex; flex-direction: column; align-items: center; justify-content: flex-start;"
            };
            ${
              this.fcbc &&
              "display:flex; flex-direction: column; align-items: center; justify-content: flex-end;"
            };
            ${
              this.fccc &&
              "display:flex; flex-direction: column; align-items: center; justify-content: center;"
            };
            ${this.fw && "flex-wrap: wrap;"};
            ${this.fwr && `flex-wrap: wrap-reverse;`}
            ${this.f1 && "flex: 1;"};
            ${this.f2 && "flex: 2;"};
            ${this.f3 && "flex: 3;"};
            ${this.fflex && `flex: ${this.fflex}`};
            ${this.fs0 && "flex-shrink: 0;"};
            ${this.fsb && "justify-content: space-between;"};
            ${this.fsa && "justify-content: space-around;"};
            ${this.fse && "justify-content: space-evenly;"};
            ${this.co && `color: ${this.co};`};
            ${this.foWe && `font-weight: ${this.foWe};`};
            ${this.bold && "font-weight: 700;"};
            ${this.foSi && `font-size: ${this.pxToRem(this.foSi)};`};
            ${this.w100 && "width: 100%;"};
            ${this.pa && `padding: ${this.pa};`};
            ${this.ma && `margin: ${this.ma};`};
            ${this.baCo && `background-color: ${this.baCo};`};
            ${this.label && `label: -${this.label};`};
            ${this.ovAu && `overflow: auto;`};
            ${this.pointer && `cursor: pointer`};
            ${
              this.ellipsis &&
              `white-space: nowrap;overflow: hidden;text-overflow: ellipsis;`
            }
            ${this.uppercase && "text-transform: uppercase;"}
            ${this.lowercase && "text-transform: lowercase;"}
            ${this.po && `position: ${this.po};`}
            ${this.ov && `overflow: ${this.ov};`}
            ${this.hide && "display: none;"}
            ${this.nowrap && "white-space: nowrap;"}
            ${this.z1 && "z-index: 1;"}
            ${this.z && `z-index: ${this.z};`}
            ${this.wi && `width: ${this.wi};`}
            ${this.maxw && `max-width: ${this.maxw};`}
            ${this.op && `opacity: ${this.op};`}
            ${this.top && `top: ${this.top};`}
            ${this.bo && `bottom: ${this.bo};`}
            ${this.boRa && `border-radius: ${this.boRa};`}
            ${this.le && `left: ${this.le};`}
            ${this.ri && `right: ${this.ri};`}
            ${this.maxh && `max-height: ${this.maxh};`}
            ${this.minw && `min-width: ${this.minw};`}
            ${this.minh && `min-height: ${this.minh};`}
            ${this.liHe && `line-height: ${this.liHe};`}
            ${this.he && `height: ${this.he};`};
            ${this.foIt && `font-style: italic;`}
            ${this.vw100 && "width: 100vw;"}
            ${this.vh100 && "height: 100vh;"}
            ${this.h100 && "height: 100%;"}
            ${this.notvisible && `visibility: hidden;`}
            ${this.txal && `text-align: ${this.txal};`}
        `;
    },
  },
};
</script>
