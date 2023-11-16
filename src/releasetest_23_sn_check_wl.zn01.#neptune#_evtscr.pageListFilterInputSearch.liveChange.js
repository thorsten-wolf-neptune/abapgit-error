var filters = [];
var bindingItems = TabData.getBinding("items");

if (!bindingItems.iLength) {
    bindingItems.filter();
    return;
}

// Get unique binding name 
var bindingName = {};
$.each(bindingItems.oModel.aBindings, function (i, data) {
    if (!bindingName[data.sPath] && data.sPath.indexOf("/") === -1) {
        bindingName[data.sPath] = true;
        if (!data.oDataState.mChangedProperties.value.__edmType) filters.push(new sap.ui.model.Filter(data.sPath, "Contains", pageListFilterInputSearch.getValue()));
    }
});

// Apply Filter
bindingItems.filter([new sap.ui.model.Filter({
    filters: filters,
    and: false
})]);