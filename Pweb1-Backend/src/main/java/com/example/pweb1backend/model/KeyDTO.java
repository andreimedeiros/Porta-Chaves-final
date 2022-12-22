package com.example.pweb1backend.model;


import java.math.BigDecimal;

public class KeyDTO {


        private String codigo;
        private BigDecimal preco;
        private String user_id;
        private String game_id;





    public KeyDTO(String codigo, BigDecimal preco, String user_id, String game_id) {
        this.codigo = codigo;
        this.preco = preco;
        this.user_id = user_id;
        this.game_id = game_id;
    }

    public KeyDTO(KeyDTO keyDTO) {

    }


    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getGame_id() {
        return game_id;
    }

    public void setGame_id(String game_id) {
        this.game_id = game_id;
    }
}
