const mediaQuery = width => (
    `(min-width: ${width}px)`
);

const xxs = mediaQuery(0);

const xs = mediaQuery(360);

const ms = mediaQuery(480);

const sm = mediaQuery(576);

const md = mediaQuery(768);

const lg = mediaQuery(992);

const xl = mediaQuery(1200);

const xxl = mediaQuery(1500);

const _3xl = mediaQuery(1800);

const _4k = mediaQuery(2560);

export { xxs, xs, ms, sm, md, lg, xl, xxl, _3xl, _4k };