const express = require('express');
const pg = require('pg');

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  if (!newGrade.name || !newGrade.course) {
    res.status(400).json({
      error: 'Invalid entry. Please check name and course'
    });
    return;
  }
  if (!Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({
      error: 'Invalid entry. Score must be an integer between 0 and 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const newGrade = {
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  if (!newGrade.name || !newGrade.course) {
    res.status(400).json({
      error: 'Invalid entry. Please check name and course'
    });
    return;
  }
  if (!Number.isInteger(newGrade.score) || newGrade.score < 0 || newGrade.score > 100) {
    res.status(400).json({
      error: 'Invalid entry. Score must be an integer between 0 and 100'
    });
    return;
  }
  const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId, newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
