Feature: Customer contact details

  Scenario Outline: check the list of customers

    Given the user visits Inshur Test Website
    When the click on details of "<Name>"
    Then the details should have <Name>,<Email>,<Phone>,<City>,<State>,<Country>,<Organization>,<Job Profile>,<Additional Info>

    Examples:
      | Name       | Email | Phone      | City   | State          | Country | Organization | Job Profile        | Additional Info                                               |
      | John Smith | Name  | John Smith | London | Greater London | England | Company 1    | Software Developer | Has Bought a lot of products before and a high Value Customer |
