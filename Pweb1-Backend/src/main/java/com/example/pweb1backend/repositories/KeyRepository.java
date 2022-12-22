package com.example.pweb1backend.repositories;

import com.example.pweb1backend.model.Key;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KeyRepository extends JpaRepository<Key, Long> {


    @Query("SELECT k from Key k where k.game_id='1'")
    public List<Key> getId1();

    @Query("SELECT k from Key k where k.game_id='2'")
    public List<Key> getId2();

    @Query("SELECT k from Key k where k.game_id='3'")
    public List<Key> getId3();

    @Query("SELECT k from Key k where k.game_id='4'")
    public List<Key> getId4();

    @Query("SELECT k from Key k where k.game_id='5'")
    public List<Key> getId5();


}
