function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(drivers.length - 2, drivers.length);

}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return (function (fare) { 
        return fare * num;
    });
}

const fareDoubler = function(fare) {
    let doubler = createFareMultiplier(2);
    return doubler(fare);
}

const fareTripler = function(fare) {
    let tripler = createFareMultiplier(3);
    return tripler(fare);
}

function selectDifferentDrivers(drivers,func) {
    return func(drivers);
}