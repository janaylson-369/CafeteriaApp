// let itens = [
//     {
//     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4DJcXxXTb22gMe6uCaqeH5t9PlIVGNRUyA&s",
//     nome:"café 3 sonhos",
//     descricao: "café expresso pronto para o seu consumo",
//     preco: "R$ 10,00" 
// },

// {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZInDjnCkCrxmXNr3JaRuOO10eXlryACYQ&s",
//     nome: "cappuccino",
//     descricao: "café expresso dilatada com cafeina proteica",
//     preco: "R$ 25,00"
// },
// {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhaWdNOGWPYytGb-Q9Cp9fMpFdLVi2u6E3g&s",
//     nome: "pacote de café",
//     descricao: "pó de café feito para todos os gostos",
//     preco: "R$ 80,00"   
// },
// {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvyMJs25v1v7KXL4GNNPUBB3_FUmHLaXnYA&s",
//     nome: "duplo café com leite",
//     descricao: "paixão feito para todos os amantes de Café",
//     preco: "R$ 15,00"
// }
// ];

// let getCartao = (item) =>{
//     return  `<div class="col p-1">
//          <div class="card">
//             <img src="${item.src}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title"${item.src}></h5>
//                 <p class="card-text">${item.descricao}</p>
//                 <a href="#" class="btn btn-primary">${item.preco}</a>
//             </div>
//         </div>
//     </div>`;
// }

// let setcartaoCol = (cartao) => {
//     let cartoesdiv = document.getElementById("cartoes");
//     cartoesdiv.insertAdjacentElement("beforeend",cartao);
// };

// let createCartoes = () => {
//     // inserir cartao dentro do codigo html na div com  id cartoes.

// let cartoesdiv = document.getElementById("cartoes");
// for (let item of itens) {
//         // html completo referente a cada card com o conteúdo.
//         let cartao = getCartao(item);
//         // cartoesdiv.innerHTML = cartão;
//         cartoesdiv.insertAdjacentElement("beforeend",cartao);
//         // inserir cartao  dentro do codigo html na div com id cartoes.
//         setcartaoCol(cartao);
//     }
// };

// createCartoes();

let itens = [
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4DJcXxXTb22gMe6uCaqeH5t9PlIVGNRUyA&s",
        nome: "café 3 sonhos",
        descricao: "café expresso pronto para o seu consumo",
        preco: "R$ 100,00"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfZInDjnCkCrxmXNr3JaRuOO10eXlryACYQ&s",
        nome: "cappuccino",
        descricao: "café expresso dilatada com cafeina proteica",
        preco: "R$ 25,00"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhaWdNOGWPYytGb-Q9Cp9fMpFdLVi2u6E3g&s",
        nome: "pacote de café",
        descricao: "pó de café feito para todos os gostos",
        preco: "R$ 400,00"
    },
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvyMJs25v1v7KXL4GNNPUBB3_FUmHLaXnYA&s",
        nome: "duplo café com leite",
        descricao: "paixão feito para todos os amantes de Café",
        preco: "R$ 15,00"
    }
];

let getCartao = (item) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3 p-2">
        <div class="card h-100 d-flex flex-column">
            <img src="${item.src}" class="card-img-top" alt="${item.nome}" style="object-fit: cover; height: 200px;">
            <div class="card-body d-flex flex-column text-center">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text flex-grow-1">${item.descricao}</p>
                <a href="#" class="btn btn-primary mt-auto">${item.preco}</a>
            </div>
        </div>
    </div>`;
};


let createCartoes = () => {
    let cartoesdiv = document.getElementById("cartoes");
    for (let item of itens) {
        let cartao = getCartao(item);
        cartoesdiv.insertAdjacentHTML("beforeend", cartao);
    }
};

createCartoes();



