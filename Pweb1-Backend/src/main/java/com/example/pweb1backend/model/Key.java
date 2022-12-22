package com.example.pweb1backend.model;


import jakarta.persistence.*;

import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name = "tb_key")
public class Key {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;

    private BigDecimal preco;


    private String user_id;

    private String user_email;


    private String game_id;


  



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getUserId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public void setUserEmail(String user_email) {
        this.user_email = user_email
    }

    public String getUserEmail() {
        return user_email
    }

    public String getGameId() {
        return game_id;
    }

    public void setGame(String game_id) {
        this.game = game_id;
    }
}
