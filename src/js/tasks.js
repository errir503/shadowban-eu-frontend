/**
 * @typedef {TaskData}
 * @property {String} id                - String id that will be put onto task item's
 *                                        collapsible header in `data-task-id`
 * @property {Number} idx               - Index for sorting. Lower indexes will be put higher
 *                                        in the <ul>, i.e. idx: 0 will be top-most <li>
 * @property {String} ?message          - Initial message that will be displayed on
 *                                        Collapsible header. Deaults to empty String, when falsy
 * @property {String} icon              - String value for material design icon
 *                                        (innerText of <i> Element)
 * @property {Bool}   ?nonInterActive   - Whether `collapsible-non-interactive` attribute
 *                                        should be added to the Collapsible, thus making
 *                                        it non-clickable. Defaults to false
 * @property {Object} ?description      - Description data for task item. If omitted, the
 *                                        Collapsible will not have a `.collapsible-body`.
 * @property {String} description.title - String shown as title of description (.collapsible-body)
 * @property {String} description.text  - String shown as description text (.collapsible-body)
 * @property {Object} ?faq              - FAQ data for task item. If omitted, the task item will not
 *                                        have FAQ/TechInfo Collapsible in its description.
 * @property {String} faq.id            - id of FAQ <ul> element
 */
export default [{
  id: 'checkUser',
  idx: 0, // used to determine place in list; 0 = top-most item
  message: 'Test Results',
  icon: '',
  nonInteractive: true
}, {
  id: 'checkBarrier',
  idx: 4,
  message: 'Reply Deboosting',
  icon: 'contact_support',
  nonInteractive: false,
  description: {
    title: 'Reply Deboosting',
    text: 'If Twitter\'s signals determine that an account might engage in harmful behavior, Twitter hides their replies behind a barrier and only loads them when "Show more replies" is clicked. This behavior is personalized, i.e. Twitter does not hide the tweets of accounts you follow. We therefore use an unbiased reference account without followings in order to determine whether tweets within a thread can be retrieved without clicking "Show more replies" from its view.\nIn some cases, Twitter classifies accounts to be offensive. In this case,replies are hidden behind a second barrier within the "Show more replies" section.'
  },
  faq: { id: 'barrierFAQ' }
}, {
  id: 'checkSuggest',
  idx: 1,
  message: 'Search Suggestion Ban',
  icon: 'contact_support',
  nonInteractive: false,
  description: {
    title: 'Search Suggestion Ban',
    text: 'This type of ban causes an account to not populate search suggestions and people search results when it is searched for while being logged out. Twitter seems to take <a href="https://en.wikipedia.org/wiki/Social_network_analysis#Metrics" target="_blank">tie strength</a> or a similar metric into account. While an account may be suggested to users you are strongly tied to, it may not be shown to others.'
  }
}, {
  id: 'checkSearch',
  idx: 2,
  message: 'Search Ban',
  icon: 'contact_support',
  nonInteractive: false,
  description: {
    title: 'Search Ban',
    text: 'This type of ban causes your tweets to be hidden from the search results entirely, no matter whether the quality filter is turned on or off. This behavior includes hashtags as well. This type of ban seems to be temporally limited for active accounts.'
  },
  faq: { id: 'searchFAQ' }
}, {
  id: 'checkConventional',
  idx: 3,
  message: 'Thread Ban',
  icon: 'contact_support',
  nonInteractive: false,
  description: {
    title: 'Thread Ban',
    text: 'This is what is referred to as conventional shadowban or ghost banning as well. It comprises a search ban while threads are completely ripped apart by hiding reply tweets of the affected user to others. Everything will look perfectly normal to the affected user but many others will not be able to see reply tweets of the affected user at all. Reasons for this ban include behavior like excessive tweeting or following. Again, this type of ban seems to be temporally limited for active accounts.'
  },
  faq: { id: 'threadFAQ' }
}];
