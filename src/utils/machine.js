const makeDue = (due, cid) => {
    let change = [];
    let drawer = [
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["FIFTY", 50],
        ["ONE_HUNDRED", 100],
        ["FIVE_HUNDRED", 500],
        ["THOUSAND", 1000]
    ];

    // Start from largest denomination
    for (let i = cid.length - 1; i >= 0; i--) {
        let [name, amountAvailable] = cid[i];
        let unitValue = drawer[i][1];
        let amountUsed = 0;

        while (due >= unitValue && amountAvailable >= unitValue) {
            due = Math.round((due - unitValue) * 100) / 100;
            amountAvailable = Math.round((amountAvailable - unitValue) * 100) / 100;
            amountUsed = Math.round((amountUsed + unitValue) * 100) / 100;
        }

        if (amountUsed > 0) {
            change.push([name, amountUsed]);
        }
    }

    // If we couldn't return full change
    if (due > 0) return null;

    return change;
};

const checkCashRegister = (price, cash, cid) => {
    let due = Math.round((cash - price) * 100) / 100;
    let totalCid = Math.round(cid.reduce((sum, item) => sum + item[1], 0) * 100) / 100;

    if (due > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (due === totalCid) {
        return { status: "CLOSED", change: cid };
    }

    const change = makeDue(due, cid);

    if (!change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change };
};


const res = checkCashRegister(
    5,
    50,
    [
        ["FIVE", 50],
        ["TEN", 100],
        ["TWENTY", 200],
        ["FIFTY", 500],
        ["ONE_HUNDRED", 1000],
        ["FIVE_HUNDRED", 5000],
        ["THOUSAND", 10000]
    ]
);
console.log(res)