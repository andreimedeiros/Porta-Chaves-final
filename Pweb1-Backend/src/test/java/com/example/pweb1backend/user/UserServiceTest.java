package com.example.pweb1backend.user;

import com.example.pweb1backend.model.User;
import com.example.pweb1backend.repositories.UserRepository;
import com.example.pweb1backend.service.UserService;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.stereotype.Service;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(MockitoJUnitRunner.class)
@DataJpaTest
public class UserServiceTest {

    private User user;

    @InjectMocks
    private UserService userService;

    @Mock
    UserRepository userRepository;



    @Test
    public void deveAlterarSenha() {
        User user = new User("12345678900", "Andrei", 14,"12345","andrei@gmail.com");
        user.setSenha("123456");

        Assertions.assertEquals("123456", user.getSenha());

    }

    @Test
    public void naoDeveCadastrarMenorDe16() {

        User user = new User("12345678900", "Andrei", 14,"12345","andrei@gmail.com");
        Assertions.assertThrows(Exception.class, () ->userService.InserirouAtualizarUser(user));

    }

    @Test
    public void naoDeveCadastrarUserCPFMenor11Caracteres() {
        User user = new User("123456789005", "Andrei", 14,"12345","andrei@gmail.com");
        Assertions.assertThrows(Exception.class, () ->userService.InserirouAtualizarUser(user));
    }
    

}
