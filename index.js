const Drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (Drivers) {
    return Drivers.slice (0,2); 
}

const returnLastTwoDrivers = function (Drivers) {
    return Drivers.slice (2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function(fare) {
        return multiplier * fare ;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (Drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(Drivers);
}