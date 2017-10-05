import _ from 'lodash';

/**
 * Finds an element within or outside of shadow root and returns an attribute. We do this
 * by sending JS to the browser traversing the shadow roots.
 * Adapted from: TODO fill url to snippet
 * 
 * Every shadow root on the way to the final element should be in the selector. Without that,
 * the node cannot be found since traversing all the nodes recursively would be a major performance hog.
 * 
 * 
 * @alias browser.wcAttribute
 * @param {string=} selector
 * @param {string=} attribute
 */
export default async function async(selector, attribute) {
    return this.wcElement(selector).getAttribute(attribute);
}