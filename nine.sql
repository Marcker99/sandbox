SELECT
    CONCAT(
        UPPER(LEFT(firstname, 1)),
        LOWER(
            SUBSTRING(
                firstname
                FROM
                    2
            )
        )
    ) || ' ' || CONCAT(
        UPPER(LEFT(lastname, 1)),
        LOWER(
            SUBSTRING(
                lastname
                FROM
                    2
            )
        )
    ) AS shortlist
FROM
    Elves
WHERE
    firstname LIKE '%tegil%'
    OR lastname LIKE '%astar%';