    $(document).ready(function() {
    $ ('header button').click (function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUP();
    })

    $('form').on ('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem =$('endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src = "${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
        
        <div class = "Overlay-imagem-link">
                <a href = "${enderecoNovaImagem}" target="_blank" title = "Ver imagem em tamanho real"
                    Ver imagem em tamanho real
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('')
    })
})