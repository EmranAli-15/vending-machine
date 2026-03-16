const makeDue = (due, cid) => {
    let change = [];
    let total = 0;
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
            due = due - unitValue;
            amountAvailable = amountAvailable - unitValue;
            amountUsed++;
            total = total+drawer[i][1];
        }

        if (amountUsed > 0) {
            for (let j = amountUsed; j >= 1; j--) {
                change.push(i);
            }
        }
    }

    // If we couldn't return full change
    if (due > 0) return null;

    return {change, total};
};

const checkCashRegister = (price, cash, cid) => {
    let due = cash - price;
    let totalCid = cid.reduce((sum, item) => sum + item[1], 0)

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



export const Engine = (price, cash) => {
    const res = checkCashRegister(
        price,
        cash,
        [
            ["FIVE", 500],
            ["TEN", 1000],
            ["TWENTY", 2000],
            ["FIFTY", 5000],
            ["ONE_HUNDRED", 10000],
            ["FIVE_HUNDRED", 50000],
            ["THOUSAND", 100000]
        ]
    );
    return res;
};