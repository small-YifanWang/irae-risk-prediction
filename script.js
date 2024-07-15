function calculateRisk() {
    const cd8 = parseFloat(document.getElementById('cd8').value);
    const cd4 = parseFloat(document.getElementById('cd4').value);
    const tph = parseFloat(document.getElementById('tph').value);
    const tfh = parseFloat(document.getElementById('tfh').value);
    const th1 = parseFloat(document.getElementById('th1').value);
    const th2 = parseFloat(document.getElementById('th2').value);

    if (isNaN(cd8) || isNaN(cd4) || isNaN(tph) || isNaN(tfh) || isNaN(th1) || isNaN(th2)) {
        document.getElementById('result1').value = 'Invalid input';
        document.getElementById('result2').value = 'Invalid input';
        return;
    }

    const irAE = 2.917 - 0.001 * cd8 - 0.082 * cd4 + 0.254 * tph + 0.367 * tfh - 7.233 * th1 / th2;
    const irAE_2_4 = -11.68 + 0.173 * cd8 + 0.06 * cd4 + 0.081 * tph + 0.49 * tfh - 5.898 * th1 / th2;

    const sigmoid = x => 1 / (1 + Math.exp(-x));

    const result1 = (sigmoid(irAE) * 100).toFixed(3);
    const result2 = (sigmoid(irAE_2_4) * 100).toFixed(3);

    document.getElementById('result1').value = result1 + '%';
    document.getElementById('result2').value = result2 + '%';
}
