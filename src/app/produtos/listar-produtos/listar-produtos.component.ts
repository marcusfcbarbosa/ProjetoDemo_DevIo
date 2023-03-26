import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProductoService } from '../produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styles: [
  ]
})
export class ListarProdutosComponent {

  constructor(private produtoService: ProductoService) {

  }

  public produtos: Produto[];
  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe({
        next: produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error: e => console.error(e)
      });
  }
}
