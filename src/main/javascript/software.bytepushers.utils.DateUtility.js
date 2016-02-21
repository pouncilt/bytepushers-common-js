(function (window, document, BytePushers) {
BytePushers = BytePushers || {};
BytePushers.DateUtility = BytePushers.namespace("software.bytepushers.utils.DateUtility");
BytePushers.DateUtility.date_sort_asc = function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

BytePushers.DateUtility.date_sort_desc = function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
};
}(window, document, BytePushers));