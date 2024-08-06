function calculateRisk() {
    const age = parseFloat(document.getElementById('age').value);
    const tph = parseFloat(document.getElementById('tph').value);
    const tfh = parseFloat(document.getElementById('tfh').value);
    const th1 = parseFloat(document.getElementById('th1').value);
    const th2 = parseFloat(document.getElementById('th2').value);

    if (isNaN(age) || isNaN(tph) || isNaN(tfh) || isNaN(th1) || isNaN(th2)) {
        document.getElementById('result1').value = 'Invalid input';
        document.getElementById('result2').value = 'Invalid input';
        return;
    }

    const irAE = -1.953-0.016*age+0.606*tph+2.668*tfh-4.789*th1/th2;
    const irAE_2_4 = -3.683+0.001*age+0.604*tph+1.404*tfh-2.573*th1/th2;

    const func = x => 1 - 1 / (1 + Math.exp(x));

    const result1 = (func(irAE) * 100).toFixed(3);
    const result2 = (func(irAE_2_4) * 100).toFixed(3);

    document.getElementById('result1').value = result1 + '%';
    document.getElementById('result2').value = result2 + '%';
}
