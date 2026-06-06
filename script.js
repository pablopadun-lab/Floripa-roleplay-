function calcular(){
    let total = 0;
    document.querySelectorAll('.valor').forEach(item=>{
        total += Number(item.value) || 0;
    });
    document.getElementById('resultado').textContent =
        "Total: R$ " + total.toLocaleString('pt-BR');
}

document.getElementById('calcButton').addEventListener('click', calcular);

// Atualiza automaticamente quando o usuário muda um select
document.querySelectorAll('.valor').forEach(sel => {
    sel.addEventListener('change', calcular);
});

// calcular inicialmente
calcular();
