Feature: Login feature for Insurance application of GURU99

    Login feature for Insurance application of GURU99
    
    Scenario: Login with wrong email and password combination
        Given I have opened the Insurance application
        When I enter 'kuamr@gmail.com' as eamil and 'kuamr' as password
        And I click on login button
        Then I am not able to login to application